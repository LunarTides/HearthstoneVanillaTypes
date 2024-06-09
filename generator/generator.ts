import { Buffer } from "node:buffer";
import https from "node:https";
import process from "node:process";
import date from "date-and-time";
import _ from "lodash";
import type { Card } from "../types.js";

function get(
	url: string,
	resolve: (value: unknown) => void,
	reject: (reason: unknown) => void,
): void {
	https.get(url, (response) => {
		// If any other status codes are returned, those needed to be added here
		if (response.statusCode === 301 || response.statusCode === 302) {
			if (!response.headers.location) {
				throw new Error(
					"No redirect found. Something must be wrong with the api?",
				);
			}

			get(response.headers.location, resolve, reject);
			return;
		}

		const body: Uint8Array[] = [];

		response.on("data", (chunk) => {
			body.push(chunk);
		});

		response.on("end", () => {
			try {
				// Remove JSON.parse(...) for plain data
				resolve(JSON.parse(Buffer.concat(body).toString()));
			} catch (error) {
				reject(error);
			}
		});
	});
}

async function getData(url: string): Promise<unknown> {
	return new Promise((resolve, reject) => {
		get(url, resolve, reject);
	});
}

async function getCards(): Promise<Card[]> {
	return await getData(
		"https://api.hearthstonejson.com/v1/latest/enUS/cards.json",
	).then((r) => {
		return r as Card[];
	});
}

const props: Record<string, [string, number]> = {};
const stored: Record<string, Array<[unknown, number]>> = {};

const whitelistedProps = new Set<keyof Card>([
	"cardClass",
	"set",
	"type",
	"rarity",
	"faction",
	"spellSchool",
	"mechanics",
	"race",
	"multiClassGroup",
]);

/**
 * Does something(?) to the key and value and applies it to `stored`.
 */
function handleStoredTypes(key: keyof Card, value: unknown): void {
	if (!whitelistedProps.has(key)) {
		return;
	}

	const values = Array.isArray(value) ? value : [value];

	for (const value of values) {
		if (!stored[key]) {
			stored[key] = [[value, 1]];
			continue;
		}

		const found = stored[key].find((s) => _.isEqual(s[0], value));
		if (found) {
			found[1]++;
		} else {
			stored[key].push([value, 1]);
		}
	}
}

async function main(): Promise<void> {
	const cards = await getCards();

	for (const [index, card] of cards.entries()) {
		if (!process.stdout.isTTY && index % 100 === 0) {
			process.stderr.write(
				`\r\u001B[KProcessing ${index / 100 + 1} / ${Math.ceil(cards.length / 100)}...`,
			);
		}

		for (const entry of Object.entries(card)) {
			const [key, value] = entry;

			handleStoredTypes(key as keyof Card, value);

			if (Object.keys(props).includes(key)) {
				const storedType = props[key][0];
				if (storedType !== (typeof value).toString()) {
					console.warn(
						"<yellow>Discrepancy found. Stored type: %s, Found type %s.</yellow>",
						storedType,
						typeof value,
					);
				}

				props[key][1]++;
				continue;
			}

			props[key] = [typeof value, 1];
		}
	}

	const now = new Date();
	const dateString = date.format(now, "DD/MM/YYYY");

	console.log(`// Last Updated: ${dateString} (DD/MM/YYYY)`);
	console.log("// Tested with: https://hearthstonejson.com");

	for (const object of Object.entries(stored)) {
		let [key, value] = object;
		value = value.sort((a, b) => b[1] - a[1]);

		console.log(
			"\nexport type %s =",
			key.slice(0, 1).toUpperCase() + key.slice(1),
		);
		for (let i = 0; i < value.length; i++) {
			const v = value[i];

			if (i >= value.length - 1) {
				console.log(`// ${v[1]} Cards\n| '${v[0]}';`);
			} else {
				console.log(`// ${v[1]} Cards\n| '${v[0]}'`);
			}
		}
	}

	console.log(`
/**
 * Hearthstone's card blueprint.
 */
export type Card = {
    id: string;
    dbfId: number;
    name: string;
    text?: string;
    flavor?: string;
    artist?: string;
    cardClass?: CardClass;
    // Collectible is either set to true, or not set at all.
    collectible?: boolean;
    cost?: number;
    mechanics?: Mechanics[];
    rarity?: Rarity;
    set: Set;
    race?: Race;
    races?: Race[];
    type: Type;
    spellSchool?: SpellSchool;
    durability?: number;
    faction?: Faction;
    // I am not sure what this is, but it is either set to true, or not set at all.
    // It might have something to do with legendaries. Maybe making sure that only 1 can be in a deck at a time.
    elite?: boolean;
    attack?: number;
    health?: number;

    howToEarn?: string;
    // All props below this line was found by a script (vcpropfinder)
    classes?: CardClass[];
    heroPowerDbfId?: number;
    referencesTags?: Mechanics[];
    targetingArrowText?: string;
    overload?: number;
    spellDamage?: number;
    collectionText?: string;
    // Has Diamond Skin is either set to true, or not set at all.
    hasDiamondSkin?: boolean;
    howToEarnGolden?: string;
    armor?: number;
    multiClassGroup?: MultiClassGroup;
    // Is mini set is either set to true, or not set at all.
    isMiniSet?: boolean;
    // This seems like it is the id (not dbfId) of the reward card.
    questReward?: string;

    // Likely part of other gamemodes.
    mercenariesRole?: string;
    mercenariesAbilityCooldown?: number;
    techLevel?: number;
    // Hide Cost is either set to true, or not set at all.
    hideCost?: boolean;
    // Hide Stats is either set to true, or not set at all.
    hideStats?: boolean;
    // Is battlegrounds pool minion is either set to true, or not set at all.
    isBattlegroundsPoolMinion?: boolean;
    battlegroundsPremiumDbfId?: number;
    battlegroundsNormalDbfId?: number;
    battlegroundsBuddyDbfId?: number;
    // Battlegrounds hero is either set to true, or not set at all.
    battlegroundsHero?: boolean;
    // Is battlegrounds buddy is either set to true, or not set at all.
    isBattlegroundsBuddy?: boolean;
    battlegroundsSkinParentId?: number;
    battlegroundsDarkmoonPrizeTurn?: number;
    countAsCopyOfDbfId?: number;
    puzzleType?: number;
};`);
}

await main();
