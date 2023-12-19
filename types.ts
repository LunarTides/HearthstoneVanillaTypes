// Last Updated: 19/12/2023
// Tested with: https://hearthstonejson.com

export type Class =
// 12799 Cards
| 'NEUTRAL'
// 1257 Cards
| 'DRUID'
// 1172 Cards
| 'WARRIOR'
// 1098 Cards
| 'MAGE'
// 1096 Cards
| 'PALADIN'
// 1083 Cards
| 'WARLOCK'
// 1077 Cards
| 'HUNTER'
// 1073 Cards
| 'ROGUE'
// 995 Cards
| 'SHAMAN'
// 926 Cards
| 'PRIEST'
// 585 Cards
| 'DEMONHUNTER'
// 393 Cards
| 'DEATHKNIGHT'
// 11 Cards
| 'DREAM'
// 2 Cards
| 'WHIZBANG';

export type Rarity =
// 2825 Cards
| 'COMMON'
// 2156 Cards
| 'RARE'
// 1567 Cards
| 'LEGENDARY'
// 1393 Cards
| 'EPIC'
// 1063 Cards
| 'FREE';

export type Set =
// 7150 Cards
| 'LETTUCE'
// 2801 Cards
| 'BATTLEGROUNDS'
// 2230 Cards
| 'TB'
// 1079 Cards
| 'THE_BARRENS'
// 854 Cards
| 'THE_SUNKEN_CITY'
// 816 Cards
| 'DALARAN'
// 808 Cards
| 'ULDUM'
// 665 Cards
| 'ALTERAC_VALLEY'
// 641 Cards
| 'DARKMOON_FAIRE'
// 604 Cards
| 'STORMWIND'
// 581 Cards
| 'HERO_SKINS'
// 559 Cards
| 'LOOTAPALOOZA'
// 519 Cards
| 'GILNEAS'
// 515 Cards
| 'TITANS'
// 507 Cards
| 'VANILLA'
// 481 Cards
| 'TROLL'
// 451 Cards
| 'EXPERT1'
// 424 Cards
| 'RETURN_OF_THE_LICH_KING'
// 421 Cards
| 'SCHOLOMANCE'
// 421 Cards
| 'BOOMSDAY'
// 414 Cards
| 'BLACK_TEMPLE'
// 397 Cards
| 'REVENDRETH'
// 365 Cards
| 'CORE'
// 347 Cards
| 'BATTLE_OF_THE_BANDS'
// 320 Cards
| 'LEGACY'
// 318 Cards
| 'ICECROWN'
// 284 Cards
| 'YEAR_OF_THE_DRAGON'
// 283
| 'WILD_WEST'
// 273 Cards
| 'GANGS'
// 265 Cards
| 'CREDITS'
// 262 Cards
| 'LOE'
// 247 Cards
| 'DRAGONS'
// 233 Cards
| 'UNGORO'
// 231 Cards
| 'OG'
// 228 Cards
| 'BRM'
// 227 Cards
| 'KARA'
// 217 Cards
| 'WONDERS'
// 213 Cards
| 'TGT'
// 200 Cards
| 'GVG'
// 170 Cards
| 'NAXX'
// 138 Cards
| 'PLACEHOLDER_202204'
// 64 Cards
| 'MISSIONS'
// 60 Cards
| 'PATH_OF_ARTHAS'
// 59 Cards
| 'TUTORIAL'
// 49 Cards
| 'TAVERNS_OF_TIME'
// 34 Cards
| 'DEMON_HUNTER_INITIATE'
// 32 Cards
| 'BASIC';

export type Type =
// 8798 Cards
| 'MINION'
// 5362 Cards
| 'ENCHANTMENT'
// 5337 Cards
| 'SPELL'
// 4438 Cards
| 'LETTUCE_ABILITY'
// 2263 Cards
| 'HERO'
// 1747 Cards
| 'HERO_POWER'
// 407 Cards
| 'WEAPON'
// 74 Cards
| 'BATTLEGROUNDS_ANOMALY'
// 56 Cards
| 'BATTLEGROUNDS_QUEST_REWARD'
// 42 Cards
| 'BATTLEGROUNDS_SPELL'
// 37 Cards
| 'LOCATION'
// 9 Cards
| 'GAME_MODE_BUTTON'
// 4 Cards
| 'MOVE_MINION_HOVER_TARGET'
// 1 Card
| 'BATTLEGROUNDS_HERO_BUDDY';

export type Tribe =
// 1026 Cards
| 'BEAST'
// 707 Cards
| 'UNDEAD'
// 493 Cards
| 'ELEMENTAL'
// 475 Cards
| 'DEMON'
// 452 Cards
| 'MECHANICAL'
// 449 Cards
| 'DRAGON'
// 268 Cards
| 'MURLOC'
// 208 Cards
| 'NAGA'
// 183 Cards
| 'PIRATE'
// 100 Cards
| 'QUILBOAR'
// 96 Cards
| 'HUMAN'
// 93 Cards
| 'ORC'
// 61 Cards
| 'TOTEM'
// 58 Cards
| 'OLDGOD'
// 46 Cards
| 'ALL'
// 36 Cards
| 'NIGHTELF'
// 32 Cards
| 'TAUREN'
// 31 Cards
| 'TROLL'
// 30 Cards
| 'DWARF'
// 22 Cards
| 'GNOME'
// 21 Cards
| 'WORGEN'
// 19 Cards
| 'DRAENEI'
// 18 Cards
| 'OGRE'
// 14 Cards
| 'BLOODELF'
// 9 Cards
| 'FURBOLG'
// 8 Cards
| 'GOBLIN'
// 8 Cards
| 'TREANT'
// 7 Cards
| 'CENTAUR'
// 7 Cards
| 'PANDAREN'
// 6 Cards
| 'LOCK'
// 6 Cards
| 'GNOLL'
// 5 Cards
| 'GOLEM'
// 3 Cards
| 'VULPERA'
// 3 Cards
| 'GRONN'
// 3 Cards
| 'EGG'
// 3 Cards
| 'CELESTIAL'
// 2 Cards
| 'HIGHELF';

export type Race = Tribe;

export type SpellSchool =
// 714 Cards
| 'SHADOW'
// 691 Cards
| 'NATURE'
// 409 Cards
| 'FIRE'
// 374 Cards
| 'HOLY'
// 326 Cards
| 'ARCANE'
// 274 Cards
| 'FROST'
// 235 Cards
| 'FEL'
// 42 Cards
| 'TAVERN'
// 1 Card
| 'PHYSICAL_COMBAT';

export type Faction =
// 247 Cards
| 'ALLIANCE'
// 151 Cards
| 'HORDE';

export type MultiClassGroup =
// 12 Cards
| 'DRUID_SHAMAN'
// 10 Cards
| 'WARLOCK_DEMONHUNTER'
// 9 Cards
| 'HUNTER_DEMONHUNTER'
// 9 Cards
| 'PRIEST_WARLOCK'
// 9 Cards
| 'MAGE_SHAMAN'
// 9 Cards
| 'DRUID_HUNTER'
// 8 Cards
| 'MAGE_ROGUE'
// 8 Cards
| 'PALADIN_WARRIOR'
// 7 Cards
| 'ROGUE_WARRIOR'
// 6 Cards
| 'JADE_LOTUS'
// 5 Cards
| 'GRIMY_GOONS'
// 5 Cards
| 'PALADIN_PRIEST'
// 4 Cards
| 'KABAL'
// 4 Cards
| 'PRIEST_DRUID'
// 2 Cards
| 'MAGE_HUNTER'
// 2 Cards
| 'HUNTER_DEATHKNIGHT'
// 2 Cards
| 'DEATHKNIGHT_PALADIN'
// 2 Cards
| 'PALADIN_SHAMAN'
// 2 Cards
| 'SHAMAN_WARRIOR'
// 2 Cards
| 'WARRIOR_DEMONHUNTER'
// 2 Cards
| 'DEMONHUNTER_ROGUE'
// 2 Cards
| 'ROGUE_PRIEST'
// 2 Cards
| 'DRUID_WARLOCK'
// 2 Cards
| 'WARLOCK_MAGE';

// Update 19/12/2023: Oh good! I just found out that all these are listed on: https://hearthstonejson.com/docs/cards.html#tags-and-referenced-tags
// Good thing that i found these myself...
export type Mechanic =
// 2691 Cards
| 'TRIGGER_VISUAL'
// 2351 Cards
| 'BATTLECRY'
// 1036 Cards
| 'DEATHRATTLE'
// 887 Cards
| 'TAUNT'
// 414 Cards
| 'AURA'
// 411 Cards
| 'RUSH'
// 394 Cards
| 'ENCHANTMENT_INVISIBLE'
// 390 Cards
| 'DISCOVER'
// 343 Cards
| 'TAG_ONE_TURN_EFFECT'
// 228 Cards
| 'DUNGEON_PASSIVE_BUFF'
// 203 Cards
// "AI_MUST_PLAY is set on AI hero powers which are auto-cast." - hearthstonejson.com docs
| 'AI_MUST_PLAY'
// 163 Cards
| 'DIVINE_SHIELD'
// 163 Cards
| 'LIFESTEAL'
// 148 Cards
| 'CHOOSE_ONE'
// 135 Cards
| 'SECRET'
// 134 Cards
| 'AFFECTED_BY_SPELL_POWER'
// 125 Cards
| 'STEALTH'
// 124 Cards
// Idk why the capitalization is this way
// "ImmuneToSpellpower is set on cards which do not increase their damage with spell damage like other cards (such as Arcane Missiles)." - hearthstonejson.com docs
| 'ImmuneToSpellpower'
// 119 Cards
// "UNTOUCHABLE is used by minions which “do not count as minions”." - hearthstonejson.com docs
| 'UNTOUCHABLE'
// 104 Cards
| 'MAGNETIC'
// 101 Cards
| 'COMBO'
// 99 Cards
| 'CHARGE'
// 95 Cards
| 'CANT_BE_SILENCED'
// 92 Cards
| 'WINDFURY'
// 91 Cards
| 'SPELLPOWER'
// 87 Cards
| 'POISONOUS'
// 85 Cards
| 'OVERLOAD'
// 77 Cards
| 'REBORN'
// 62 Cards
// "InvisibleDeathrattle is an internal tag, used mostly in boss cards." - hearthstonejson.com docs
| 'InvisibleDeathrattle'
// 59 Cards
// "TOPDECK is set on cards which are revealed to the opponent when drawn." - hearthstonejson.com docs
| 'TOPDECK'
// 59 Cards
| 'START_OF_GAME'
// 57 Cards
| 'FREEZE'
// 55 Cards
| 'CANT_ATTACK'
// 49 Cards
| 'AVENGE'
// 46 Cards
| 'SPELLBURST'
// 45 Cards
| 'TWINSPELL'
// 45 Cards
| 'QUEST'
// 40 Cards
| 'OUTCAST'
// 39 Cards
| 'TRADEABLE'
// 36 Cards
| 'CANT_BE_TARGETED_BY_SPELLS'
// 36 Cards
| 'CANT_BE_TARGETED_BY_HERO_POWERS'
// 36 Cards
| 'CORRUPT'
// 34 Cards
| 'DREDGE'
// 33 Cards
| 'OVERKILL'
// 33 Cards
| 'ENRAGED'
// 31 Cards
| 'INSPIRE'
// 31 Cards
| 'HONORABLEKILL'
// 29 Cards
| 'INFUSE'
// 27 Cards
| 'FRENZY'
// 23 Cards
| 'ECHO'
// 21 Cards
| 'MANATHIRST'
// 19 Cards
| 'FORGE'
// 18 Cards
| 'VENOMOUS'
// 17 Cards
| 'ADJACENT_BUFF'
// 17 Cards
| 'SILENCE'
// 15 Cards
| 'COLOSSAL'
// 15 Cards
| 'QUICKDRAW'
// 14 Cards
| 'PUZZLE'
// 14 Cards
| 'APPEAR_FUNCTIONALLY_DEAD'
// 14 Cards
// "EVIL_GLOW is set on cards which glow red while in the hand." - hearthstonejson.com docs
| 'EVIL_GLOW'
// 13 Cards
| 'EXCAVATE'
// 12 Cards
| 'TITAN'
// 11 Cards
| 'SIDEQUEST'
// 11 Cards
| 'MULTIPLY_BUFF_VALUE'
// 11 Cards
| 'SPARE_PART'
// 10 Cards
| 'OVERHEAL'
// 9 Cards
| 'IMMUNE'
// 7 Cards
// "FORGETFUL corresponds to “50% chance to attack the wrong target”." - hearthstonejson.com docs
| 'FORGETFUL'
// 6 Cards
| 'JADE_LOTUS'
// 5 Cards
| 'GRIMY_GOONS'
// 4 Cards
| 'HEROPOWER_DAMAGE'
// 4 Cards
| 'GEARS'
// 4 Cards
| 'KABAL'
// 4 Cards
| 'JADE_GOLEM'
// 3 Cards
| 'RECEIVES_DOUBLE_SPELLDAMAGE_BONUS'
// 3 Cards
| 'DEATH_KNIGHT'
// 3 Cards
| 'MORPH'
// 3 Cards
| 'IGNORE_HIDE_STATS_FOR_BIG_CARD'
// 3 Cards
| 'GHOSTLY'
// 3 Cards
| 'CANT_BE_DESTROYED'
// 2 Cards
| 'FINISH_ATTACK_SPELL_ON_DAMAGE'
// 2 Cards
| 'SUMMONED'
// 2 Cards
| 'CANT_BE_FATIGUED'
// 2 Cards
// "AUTOATTACK is a mechanic used in the Karazhan Chess scenario." - hearthstonejson.com docs
| 'AUTOATTACK'
// 1 Card, probably Genn Greymane
| 'COLLECTIONMANAGER_FILTER_MANA_EVEN'
// 1 Card, probably Baku the Mooneater
| 'COLLECTIONMANAGER_FILTER_MANA_ODD'
// 1 Card
// "COUNTER is… essentially just Counterspell." - hearthstonejson.com docs
| 'COUNTER'
// ? Cards, shown in the docs
| 'ADAPT'
// ? Cards, shown in the docs
// "RITUAL corresponds to cards which buff C’Thun." - hearthstonejson.com docs
| 'RITUAL';

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
    cardClass?: Class;
    // Collectible is either set to true, or not set at all.
    collectible?: boolean;
    cost?: number;
    mechanics?: Mechanic[];
    rarity?: Rarity;
    set: Set;
    race?: Tribe;
    races?: Tribe[];
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
    classes?: Class[];
    heroPowerDbfId?: number;
    referencesTags?: Mechanic[];
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
};
