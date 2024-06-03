// Last Updated: 03/06/2024 (DD/MM/YYYY)
// Tested with: https://hearthstonejson.com

export type CardClass =
// 13373 Cards
| 'NEUTRAL'
// 1329 Cards
| 'DRUID'
// 1214 Cards
| 'WARRIOR'
// 1157 Cards
| 'MAGE'
// 1150 Cards
| 'PALADIN'
// 1143 Cards
| 'WARLOCK'
// 1138 Cards
| 'HUNTER'
// 1119 Cards
| 'ROGUE'
// 1047 Cards
| 'SHAMAN'
// 986 Cards
| 'PRIEST'
// 650 Cards
| 'DEMONHUNTER'
// 487 Cards
| 'DEATHKNIGHT'
// 11 Cards
| 'DREAM'
// 3 Cards
| 'WHIZBANG';

export type Set =
// 7151 Cards
| 'LETTUCE'
// 3152 Cards
| 'BATTLEGROUNDS'
// 2439 Cards
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
// 652 Cards
| 'HERO_SKINS'
// 641 Cards
| 'DARKMOON_FAIRE'
// 604 Cards
| 'STORMWIND'
// 560 Cards
| 'LOOTAPALOOZA'
// 519 Cards
| 'GILNEAS'
// 518 Cards
| 'TITANS'
// 507 Cards
| 'VANILLA'
// 481 Cards
| 'TROLL'
// 452 Cards
| 'EXPERT1'
// 425 Cards
| 'RETURN_OF_THE_LICH_KING'
// 422 Cards
| 'SCHOLOMANCE'
// 421 Cards
| 'BOOMSDAY'
// 421 Cards
| 'BLACK_TEMPLE'
// 396 Cards
| 'REVENDRETH'
// 372 Cards
| 'CORE'
// 371 Cards
| 'WHIZBANGS_WORKSHOP'
// 348 Cards
| 'LEGACY'
// 347 Cards
| 'BATTLE_OF_THE_BANDS'
// 347 Cards
| 'WILD_WEST'
// 318 Cards
| 'ICECROWN'
// 284 Cards
| 'YEAR_OF_THE_DRAGON'
// 273 Cards
| 'GANGS'
// 265 Cards
| 'CREDITS'
// 262 Cards
| 'LOE'
// 247 Cards
| 'DRAGONS'
// 238 Cards
| 'PLACEHOLDER_202204'
// 234 Cards
| 'UNGORO'
// 231 Cards
| 'OG'
// 230 Cards
| 'KARA'
// 228 Cards
| 'BRM'
// 217 Cards
| 'WONDERS'
// 213 Cards
| 'TGT'
// 200 Cards
| 'GVG'
// 170 Cards
| 'NAXX'
// 64 Cards
| 'MISSIONS'
// 60 Cards
| 'PATH_OF_ARTHAS'
// 59 Cards
| 'TUTORIAL'
// 49 Cards
| 'TAVERNS_OF_TIME'
// 40 Cards
| 'DEMON_HUNTER_INITIATE'
// 33 Cards
| 'BASIC'
// 21 Cards
| 'EVENT';

export type Type =
// 9232 Cards
| 'MINION'
// 5625 Cards
| 'ENCHANTMENT'
// 5593 Cards
| 'SPELL'
// 4438 Cards
| 'LETTUCE_ABILITY'
// 2414 Cards
| 'HERO'
// 1830 Cards
| 'HERO_POWER'
// 428 Cards
| 'WEAPON'
// 74 Cards
| 'BATTLEGROUND_ANOMALY'
// 68 Cards
| 'BATTLEGROUND_QUEST_REWARD'
// 60 Cards
| 'BATTLEGROUND_SPELL'
// 45 Cards
| 'LOCATION'
// 9 Cards
| 'GAME_MODE_BUTTON'
// 4 Cards
| 'MOVE_MINION_HOVER_TARGET'
// 1 Cards
| 'BATTLEGROUND_HERO_BUDDY';

export type Rarity =
// 2961 Cards
| 'COMMON'
// 2323 Cards
| 'RARE'
// 1650 Cards
| 'LEGENDARY'
// 1474 Cards
| 'EPIC'
// 1132 Cards
| 'FREE';

export type Faction =
// 255 Cards
| 'ALLIANCE'
// 152 Cards
| 'HORDE';

export type SpellSchool =
// 735 Cards
| 'SHADOW'
// 702 Cards
| 'NATURE'
// 412 Cards
| 'FIRE'
// 379 Cards
| 'HOLY'
// 335 Cards
| 'ARCANE'
// 282 Cards
| 'FROST'
// 242 Cards
| 'FEL'
// 60 Cards
| 'TAVERN'
// 39 Cards
| 'SPELLCRAFT'
// 1 Cards
| 'PHYSICAL_COMBAT';

export type Mechanics =
// 2858 Cards
| 'TRIGGER_VISUAL'
// 2488 Cards
| 'BATTLECRY'
// 1103 Cards
| 'DEATHRATTLE'
// 940 Cards
| 'TAUNT'
// 447 Cards
| 'DISCOVER'
// 436 Cards
| 'AURA'
// 434 Cards
| 'RUSH'
// 399 Cards
| 'ENCHANTMENT_INVISIBLE'
// 358 Cards
| 'TAG_ONE_TURN_EFFECT'
// 228 Cards
| 'DUNGEON_PASSIVE_BUFF'
// 204 Cards
| 'AI_MUST_PLAY'
// 184 Cards
| 'LIFESTEAL'
// 180 Cards
| 'DIVINE_SHIELD'
// 153 Cards
| 'CHOOSE_ONE'
// 139 Cards
| 'SECRET'
// 134 Cards
| 'AFFECTED_BY_SPELL_POWER'
// 129 Cards
| 'STEALTH'
// 129 Cards
| 'ImmuneToSpellpower'
// 119 Cards
| 'UNTOUCHABLE'
// 109 Cards
| 'MAGNETIC'
// 105 Cards
| 'COMBO'
// 103 Cards
| 'CHARGE'
// 97 Cards
| 'CANT_BE_SILENCED'
// 96 Cards
| 'SPELLPOWER'
// 96 Cards
| 'WINDFURY'
// 90 Cards
| 'POISONOUS'
// 87 Cards
| 'OVERLOAD'
// 85 Cards
| 'REBORN'
// 62 Cards
| 'InvisibleDeathrattle'
// 60 Cards
| 'FREEZE'
// 58 Cards
| 'AVENGE'
// 56 Cards
| 'START_OF_GAME_KEYWORD'
// 55 Cards
| 'CANT_ATTACK'
// 46 Cards
| 'QUEST'
// 46 Cards
| 'SPELLBURST'
// 45 Cards
| 'TWINSPELL'
// 45 Cards
| 'OUTCAST'
// 44 Cards
| 'TRADEABLE'
// 41 Cards
| 'ELUSIVE'
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
| 'HONORABLE_KILL'
// 29 Cards
| 'INFUSE'
// 27 Cards
| 'FRENZY'
// 24 Cards
| 'ECHO'
// 22 Cards
| 'MANATHIRST'
// 21 Cards
| 'FORGE'
// 20 Cards
| 'VENOMOUS'
// 19 Cards
| 'MINIATURIZE'
// 17 Cards
| 'ADJACENT_BUFF'
// 17 Cards
| 'EXCAVATE'
// 17 Cards
| 'SILENCE'
// 16 Cards
| 'QUICKDRAW'
// 15 Cards
| 'COLOSSAL'
// 14 Cards
| 'PUZZLE'
// 14 Cards
| 'APPEAR_FUNCTIONALLY_DEAD'
// 14 Cards
| 'EVIL_GLOW'
// 13 Cards
| 'SIDE_QUEST'
// 12 Cards
| 'TITAN'
// 11 Cards
| 'FORGETFUL'
// 11 Cards
| 'MULTIPLY_BUFF_VALUE'
// 11 Cards
| 'SPARE_PART'
// 10 Cards
| 'OVERHEAL'
// 9 Cards
| 'IMMUNE'
// 6 Cards
| 'JADE_LOTUS'
// 5 Cards
| 'GRIMY_GOONS'
// 5 Cards
| 'GIGANTIFY'
// 4 Cards
| 'HEROPOWER_DAMAGE'
// 4 Cards
| 'GEARS'
// 4 Cards
| 'KABAL'
// 4 Cards
| 'JADE_GOLEM'
// 4 Cards
| 'CANT_BE_DESTROYED'
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
// 2 Cards
| 'SUMMONED'
// 2 Cards
| 'CANT_BE_FATIGUED'
// 2 Cards
| 'AUTO_ATTACK'
// 1 Cards
| 'FINISH_ATTACK_SPELL_ON_DAMAGE'
// 1 Cards
| 'COLLECTIONMANAGER_FILTER_MANA_EVEN'
// 1 Cards
| 'COLLECTIONMANAGER_FILTER_MANA_ODD'
// 1 Cards
| 'CANT_BE_TARGETED_BY_SPELLS'
// 1 Cards
| 'CANT_BE_TARGETED_BY_HERO_POWERS'
// 1 Cards
| 'COUNTER';

export type Race =
// 1076 Cards
| 'BEAST'
// 743 Cards
| 'UNDEAD'
// 538 Cards
| 'ELEMENTAL'
// 500 Cards
| 'DEMON'
// 499 Cards
| 'MECHANICAL'
// 485 Cards
| 'DRAGON'
// 280 Cards
| 'MURLOC'
// 224 Cards
| 'NAGA'
// 201 Cards
| 'PIRATE'
// 109 Cards
| 'QUILBOAR'
// 96 Cards
| 'HUMAN'
// 94 Cards
| 'ORC'
// 62 Cards
| 'TOTEM'
// 58 Cards
| 'OLDGOD'
// 52 Cards
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
| 'MAGE_HUNTER'
// 7 Cards
| 'DRUID_WARLOCK'
// 7 Cards
| 'ROGUE_WARRIOR'
// 6 Cards
| 'JADE_LOTUS'
// 6 Cards
| 'PRIEST_DRUID'
// 5 Cards
| 'GRIMY_GOONS'
// 5 Cards
| 'PALADIN_PRIEST'
// 4 Cards
| 'KABAL'
// 4 Cards
| 'HUNTER_DEATHKNIGHT'
// 4 Cards
| 'PALADIN_SHAMAN'
// 4 Cards
| 'SHAMAN_WARRIOR'
// 4 Cards
| 'WARRIOR_DEMONHUNTER'
// 4 Cards
| 'DEMONHUNTER_ROGUE'
// 4 Cards
| 'DEATHKNIGHT_PALADIN'
// 4 Cards
| 'ROGUE_PRIEST'
// 4 Cards
| 'WARLOCK_MAGE';

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
};
