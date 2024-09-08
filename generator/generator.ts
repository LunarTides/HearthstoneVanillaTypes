import { Buffer } from "node:buffer";
import fs from "node:fs";
import https from "node:https";
import date from "date-and-time";
import type { Card } from "../types.js";

const API_URL = "https://api.hearthstonejson.com/v1/latest/enUS/cards.json";

const relevantCardProps = [
	"cardClass",
	"set",
	"type",
	"rarity",
	"faction",
	"spellSchool",
	"mechanics",
	"race",
	"multiClassGroup",
];

// Helper function to capitalize the first letter of a string
function capitalize(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to fetch data from the API
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function fetchData(url: string): Promise<any> {
	return new Promise((resolve, reject) => {
		https
			.get(url, (response) => {
				// Follow redirects
				if ([301, 302].includes(response.statusCode)) {
					return resolve(fetchData(response.headers.location));
				}

				const chunks: Uint8Array[] = [];

				response.on("data", (chunk) => chunks.push(chunk));
				response.on("end", () =>
					resolve(JSON.parse(Buffer.concat(chunks).toString())),
				);
			})
			.on("error", reject);
	});
}

// Function to process card data and generate type definitions
async function main(): Promise<void> {
	const cards = (await fetchData(API_URL)) as Card[];
	const cardStats: Record<string, Record<string, number>> = {};

	// Count occurrences of relevant properties
	for (const card of cards) {
		for (const prop of relevantCardProps) {
			const value = card[prop];
			if (value) {
				const values = Array.isArray(value) ? value : [value];
				for (const v of values) {
					cardStats[prop] ??= {};
					cardStats[prop][v] = (cardStats[prop][v] || 0) + 1;
				}
			}
		}
	}

	// Generate type definitions based on occurrences
	let output = `// Last Updated: ${date.format(new Date(), "DD/MM/YYYY")} (DD/MM/YYYY)\n`;
	output += "// Tested with: https://hearthstonejson.com\n";

	for (const [prop, values] of Object.entries(cardStats)) {
		// Sort values based on occurrences.
		// This puts props with more occurrences further up.
		const sortedValues = Object.entries(values).sort((a, b) => b[1] - a[1]);

		output += `\nexport type ${capitalize(prop)} =`;
		for (const [value, count] of sortedValues) {
			output += `\n// ${count} Cards\n| '${value}'`;
		}
		output += ";\n";
	}

	// TODO: Automate the creation of this object.
	output += `
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
    // This seems like this is the id (not dbfId) of the reward card.
    questReward?: string;

    // All props below this line is likely part of other gamemodes.
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
};\n`;

	// Save the generated types to a file
	await fs.promises.writeFile("../types.ts", output, "utf8");
}

// Run the main function
main().catch(console.error);
