// Last Updated: 06/02/2024
// Tested with: https://hearthstonejson.com

export type Class =
// 12824 Cards
| 'NEUTRAL'
// 1264 Cards
| 'DRUID'
// 1178 Cards
| 'WARRIOR'
// 1105 Cards
| 'MAGE'
// 1101 Cards
| 'PALADIN'
// 1086 Cards
| 'WARLOCK'
// 1081 Cards
| 'HUNTER'
// 1075 Cards
| 'ROGUE'
// 1001 Cards
| 'SHAMAN'
// 934 Cards
| 'PRIEST'
// 591 Cards
| 'DEMONHUNTER'
// 397 Cards
| 'DEATHKNIGHT'
// 11 Cards
| 'DREAM'
// 2 Cards
| 'WHIZBANG';

export type Set =
// 7150 Cards
| 'LETTUCE'
// 2808 Cards
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
// 592 Cards
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
// 347 Cards
| 'WILD_WEST'
// 320 Cards
| 'LEGACY'
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
// 234 Cards
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
// 8825 Cards
| 'MINION'
// 5376 Cards
| 'ENCHANTMENT'
// 5359 Cards
| 'SPELL'
// 4438 Cards
| 'LETTUCE_ABILITY'
// 2276 Cards
| 'HERO'
// 1751 Cards
| 'HERO_POWER'
// 409 Cards
| 'WEAPON'
// 74 Cards
| 'BATTLEGROUNDS_ANOMALY'
// 56 Cards
| 'BATTLEGROUNDS_QUEST_REWARD'
// 42 Cards
| 'BATTLEGROUNDS_SPELL'
// 38 Cards
| 'LOCATION'
// 9 Cards
| 'GAME_MODE_BUTTON'
// 4 Cards
| 'MOVE_MINION_HOVER_TARGET'
// 1 Card
| 'BATTLEGROUNDS_HERO_BUDDY';

export type Rarity =
// 2843 Cards
| 'COMMON'
// 2177 Cards
| 'RARE'
// 1573 Cards
| 'LEGENDARY'
// 1400 Cards
| 'EPIC'
// 1071 Cards
| 'FREE';

export type Faction =
// 247 Cards
| 'ALLIANCE'
// 151 Cards
| 'HORDE';

export type SpellSchool =
// 715 Cards
| 'SHADOW'
// 694 Cards
| 'NATURE'
// 410 Cards
| 'FIRE'
// 374 Cards
| 'HOLY'
// 327 Cards
| 'ARCANE'
// 275 Cards
| 'FROST'
// 238 Cards
| 'FEL'
// 42 Cards
| 'TAVERN'
// 1 Card
| 'PHYSICAL_COMBAT';

// Update 19/12/2023: Oh good! I just found out that all these are listed on: https://hearthstonejson.com/docs/cards.html#tags-and-referenced-tags
// Good thing that i found these myself...
export type Mechanic =
// 2696 Cards
| 'TRIGGER_VISUAL'
// 2361 Cards
| 'BATTLECRY'
// 1041 Cards
| 'DEATHRATTLE'
// 895 Cards
| 'TAUNT'
// 415 Cards
| 'AURA'
// 412 Cards
| 'RUSH'
// 394 Cards
| 'DISCOVER'
// 394 Cards
| 'ENCHANTMENT_INVISIBLE'
// 344 Cards
| 'TAG_ONE_TURN_EFFECT'
// 228 Cards
| 'DUNGEON_PASSIVE_BUFF'
// 203 Cards
// "AI_MUST_PLAY is set on AI hero powers which are auto-cast." - hearthstonejson.com docs
| 'AI_MUST_PLAY'
// 167 Cards
| 'LIFESTEAL'
// 166 Cards
| 'DIVINE_SHIELD'
// 149 Cards
| 'CHOOSE_ONE'
// 136 Cards
| 'SECRET'
// 134 Cards
| 'AFFECTED_BY_SPELL_POWER'
// 126 Cards
| 'STEALTH'
// 124 Cards
// Idk why the capitalization is this way
// "ImmuneToSpellpower is set on cards which do not increase their damage with spell damage like other cards (such as Arcane Missiles)." - hearthstonejson.com docs
| 'ImmuneToSpellpower'
// 119 Cards
// "UNTOUCHABLE is used by minions which “do not count as minions”." - hearthstonejson.com docs
| 'UNTOUCHABLE'
// 106 Cards
| 'MAGNETIC'
// 101 Cards
| 'COMBO'
// 99 Cards
| 'CHARGE'
// 95 Cards
| 'CANT_BE_SILENCED'
// 92 Cards
| 'SPELLPOWER'
// 92 Cards
| 'WINDFURY'
// 87 Cards
| 'POISONOUS'
// 85 Cards
| 'OVERLOAD'
// 78 Cards
| 'REBORN'
// 62 Cards
// "InvisibleDeathrattle is an internal tag, used mostly in boss cards." - hearthstonejson.com docs
| 'InvisibleDeathrattle'
// 59 Cards
// "TOPDECK is set on cards which are revealed to the opponent when drawn." - hearthstonejson.com docs
| 'TOPDECK'
// 59 Cards
| 'FREEZE'
// 59 Cards
// UPDATE 4.0.0: For some reason, this has been renamed? Renamed from 'START_OF_GAME'
| 'START_OF_GAME_KEYWORD'
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
// 37 Cards
| 'CANT_BE_TARGETED_BY_SPELLS'
// 37 Cards
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
// UPDATE 4.0.0: For some reason, this has been renamed? Renamed from 'HONORABLEKILL'
| 'HONORABLE_KILL'
// 29 Cards
| 'INFUSE'
// 27 Cards
| 'FRENZY'
// 23 Cards
| 'ECHO'
// 21 Cards
| 'FORGE'
// 21 Cards
| 'MANATHIRST'
// 18 Cards
| 'VENOMOUS'
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
// "EVIL_GLOW is set on cards which glow red while in the hand." - hearthstonejson.com docs
| 'EVIL_GLOW'
// 12 Cards
| 'TITAN'
// 11 Cards
// UPDATE 4.0.0: For some reason, this has been renamed? Renamed from 'SIDEQUEST'
| 'SIDE_QUEST'
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

export type Race = Tribe;

export type Tribe =
// 1027 Cards
| 'BEAST'
// 707 Cards
| 'UNDEAD'
// 512 Cards
| 'ELEMENTAL'
// 475 Cards
| 'DEMON'
// 453 Cards
| 'MECHANICAL'
// 450 Cards
| 'DRAGON'
// 269 Cards
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
// 62 Cards
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
