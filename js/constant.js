/** 
 * This file contains many constants used in our game
 * 
 * Author(s): Varik Hoang, Peter Bae, Cuong Tran, Logan Stafford
 * TCSS491 - Winter 2018
 */

/** ----------- ANIMATIONS -----------------  */
const ELF_LEFT_IDLE = "elf.left.idle";
const ELF_LEFT_WALK = "elf.left.walk";
const ELF_LEFT_ATTACK = "elf.left.attack";
const ELF_LEFT_DIE = "elf.left.die";
const ELF_LEFT_ARROW = "elf.left.arrow";

const ELF_RIGHT_IDLE = "elf.right.idle";
const ELF_RIGHT_WALK = "elf.right.walk";
const ELF_RIGHT_ATTACK = "elf.right.attack";
const ELF_RIGHT_DIE = "elf.right.die";
const ELF_RIGHT_ARROW = "elf.right.arrow";

const KNIGHT_LEFT_IDLE = "knight.left.idle";
const KNIGHT_LEFT_WALK = "knight.left.walk";
const KNIGHT_LEFT_ATTACK = "knight.left.attack";
const KNIGHT_LEFT_DIE = "knight.left.die";

const KNIGHT_RIGHT_IDLE = "knight.right.idle";
const KNIGHT_RIGHT_WALK = "knight.right.walk";
const KNIGHT_RIGHT_ATTACK = "knight.right.attack";
const KNIGHT_RIGHT_DIE = "knight.right.die";

const FAIRY_LEFT_IDLE = "fairy.left.idle";
const FAIRY_LEFT_WALK = "fairy.left.walk";
const FAIRY_LEFT_ATTACK = "fairy.left.attack";
const FAIRY_LEFT_DIE = "fairy.left.die";
const FAIRY_LEFT_MAGIC = "fairy.left.magic";

const FAIRY_RIGHT_IDLE = "fairy.right.idle";
const FAIRY_RIGHT_WALK = "fairy.right.walk";
const FAIRY_RIGHT_ATTACK = "fairy.right.attack";
const FAIRY_RIGHT_DIE = "fairy.right.die";
const FAIRY_RIGHT_MAGIC = "fairy.right.magic";

const ORC_LEFT_IDLE = "orc.left.idle";
const ORC_LEFT_WALK = "orc.left.walk";
const ORC_LEFT_ATTACK = "orc.left.attack";
const ORC_LEFT_DIE = "orc.left.die";

const ORC_RIGHT_IDLE = "orc.right.idle";
const ORC_RIGHT_WALK = "orc.right.walk";
const ORC_RIGHT_ATTACK = "orc.right.attack";
const ORC_RIGHT_DIE = "orc.right.die";

const DRAGON_LEFT_IDLE = "dragon.left.idle";
const DRAGON_LEFT_WALK = "dragon.left.walk";
const DRAGON_LEFT_ATTACK = "dragon.left.attack";
const DRAGON_LEFT_DIE = "dragon.left.die";

const DRAGON_RIGHT_IDLE = "dragon.right.idle";
const DRAGON_RIGHT_WALK = "dragon.right.walk";
const DRAGON_RIGHT_ATTACK = "dragon.right.attack";
const DRAGON_RIGHT_DIE = "dragon.right.die";

const BACKGROUND_BLIZZARD = "background.blizzard";
const BACKGROUND_FOREST = "background.forest";
const BACKGROUND_VOCANO = "background.volcano";
const BACKGROUND_GAMESTART = "background.gamestart";
const BACKGROUND_GAMEOVER = "background.gameover";
const BACKGROUND_GAMEPAUSE = "background.gamepause";
const BACKGROUND_GAMETUTORIAL = "background.gametutorial";

/** ----------- SOUND -----------------  */
const ELF_SOUND_DEPLOY = "elf.sound.deploy";
const ELF_SOUND_ATTACK = "elf.sound.attack";
const ELF_SOUND_DEAD = "elf.sound.dead";

const KNIGHT_SOUND_DEPLOY = "knight.sound.deploy";
const KNIGHT_SOUND_ATTACK = "knight.sound.attack";
const KNIGHT_SOUND_DEAD = "knight.sound.dead";

const FAIRY_SOUND_DEPLOY = "fairy.sound.deploy";
const FAIRY_SOUND_ATTACK = "fairy.sound.attack";
const FAIRY_SOUND_DEAD = "fairy.sound.dead";

const ORC_SOUND_DEPLOY = "orc.sound.deploy";
const ORC_SOUND_ATTACK = "orc.sound.attack";
const ORC_SOUND_DEAD = "orc.sound.dead";

const DRAGON_SOUND_DEPLOY = "dragon.sound.deploy";
const DRAGON_SOUND_ATTACK = "dragon.sound.attack";
const DRAGON_SOUND_DEAD = "dragon.sound.dead";

const MENU_ERROR = "menu.error";
const MENU_ACHIEVEMENT = "menu.achievement";
const MENU_MUSIC = "menu.music";
const MENU_NAVSOUNDS = "menu.navsounds";
const MENU_SUCCESS = "menu.success";
const MENU_YOU_LOSE_MUSIC = "menu.youlosemusic";

const GAME_NEXT_LEVEL = "game.next.level";
const GAME_LOST = "game.lost";
const GAME_MUSIC = "menu.gamemusic";

/** ----------- UNIT PROPERTIES -----------------  */
const ELF_ID = 1;
const ELF_SPEED_1 = 50;
const ELF_SPEED_2 = 35;
const ELF_HEALTH_1 = 140;
const ELF_HEALTH_2 = 160;
const ELF_HIT_DAMAGE_1 = 30;
const ELF_HIT_DAMAGE_2 = 45;
const ELF_RANGE_1 = 400;
const ELF_RANGE_2 = 100;
const ELF_DEPLOY_ENERGY = 25;

const KNIGHT_ID = 2;
const KNIGHT_SPEED_1 = 40;
const KNIGHT_SPEED_2 = 40;
const KNIGHT_HEALTH_1 = 220;
const KNIGHT_HEALTH_2 = 200;
const KNIGHT_HIT_DAMAGE_1 = 50;
const KNIGHT_HIT_DAMAGE_2 = 55;
const KNIGHT_RANGE_1 = 100;
const KNIGHT_RANGE_2 = 100;
const KNIGHT_DEPLOY_ENERGY = 28;

const FAIRY_ID = 3;
const FAIRY_SPEED_1 = 100;
const FAIRY_SPEED_2 = 100;
const FAIRY_HEALTH_1 = 100;
const FAIRY_HEALTH_2 = 80;
const FAIRY_HIT_DAMAGE_1 = 20;
const FAIRY_HIT_DAMAGE_2 = 20;
const FAIRY_RANGE_1 = 300;
const FAIRY_RANGE_2 = 300;
const FAIRY_DEPLOY_ENERGY = 22;

const ORC_ID = 4;
const ORC_SPEED_1 = 25;
const ORC_SPEED_2 = 25;
const ORC_HEALTH_1 = 220;
const ORC_HEALTH_2 = 200;
const ORC_HIT_DAMAGE_1 = 100;
const ORC_HIT_DAMAGE_2 = 100;
const ORC_RANGE_1 = 100;
const ORC_RANGE_2 = 100;
const ORC_DEPLOY_ENERGY = 24;

const DRAGON_ID = 5;
const DRAGON_SPEED_1 = 50;
const DRAGON_SPEED_2 = 35;
const DRAGON_HEALTH_1 = 140;
const DRAGON_HEALTH_2 = 160;
const DRAGON_HIT_DAMAGE_1 = 30;
const DRAGON_HIT_DAMAGE_2 = 100;
const DRAGON_RANGE_1 = 400;
const DRAGON_RANGE_2 = 100;
const DRAGON_DEPLOY_ENERGY = 30;

const FAIRY_LEFT_MAGIC_STAR = "fairy.left.magicstar";
const FAIRY_RIGHT_MAGIC_STAR = "fairy.right.magicstar";

/** ----------- EVENT -----------------  */
const MOUSE_RIGHT_CLICK = 0;

/** ----------- UNIT SELECTION---------  */
const ICON_POS_START_Y = 150; // use this if all icons stand on same vertical position
const ICON_POS_END_Y = 197; // use this if all icons stand on same vertical position

const ICON_ELF_POS_START_X = 253;
const ICON_ELF_POS_END_X = 302;
const ICON_ELF_POS_START_Y = ICON_POS_START_Y;
const ICON_ELF_POS_END_Y = ICON_POS_END_Y;

const ICON_KNIGHT_POS_START_X = 307;
const ICON_KNIGHT_POS_END_X = 355;
const ICON_KNIGHT_POS_START_Y = ICON_POS_START_Y;
const ICON_KNIGHT_POS_END_Y = ICON_POS_END_Y;

const ICON_FAIRY_POS_START_X = 362;
const ICON_FAIRY_POS_END_X = 409;
const ICON_FAIRY_POS_START_Y = ICON_POS_START_Y;
const ICON_FAIRY_POS_END_Y = ICON_POS_END_Y;

const ICON_MUSIC_TOGGLE_X = 1319;
const ICON_MUSIC_TOGGLE_Y = 770;

const ICON_PLAY_START_X = 644;
const ICON_PLAY_START_Y = 512;
const ICON_PLAY_END_X = 767;
const ICON_PLAY_END_Y = 570;

const ICON_PAUSE_START_X = 5;
const ICON_PAUSE_START_Y = 745;
const ICON_PAUSE_END_X = 270;
const ICON_PAUSE_END_Y = 802;

const ICON_GAME_PAUSED_START_X = 567;
const ICON_GAME_PAUSED_START_Y = 715;
const ICON_GAME_PAUSED_END_X = 865;
const ICON_GAME_PAUSED_END_Y = 773;

const ICON_HOW_TO_PLAY_START_X = 564;
const ICON_HOW_TO_PLAY_START_Y = 587;
const ICON_HOW_TO_PLAY_END_X = 855;
const ICON_HOW_TO_PLAY_END_Y = 643;

const ICON_CLOSEHELP_START_X = 8;
const ICON_CLOSEHELP_START_Y = 9;
const ICON_CLOSEHELP_END_X = 189;
const ICON_CLOSEHELP_END_Y = 70;

const ICON_TRYAGAIN_START_X = 529;
const ICON_TRYAGAIN_START_Y = 632;
const ICON_TRYAGAIN_END_X = 886;
const ICON_TRYAGAIN_END_Y = 689;

/** ----------- BOARD -----------------  */
const MARGIN_X = 240;
const MARGIN_Y = 275;
const VERTICAL_LANE_SIZE	= 80;
const HORIZONTAL_LANE_SIZE	= 960;
const LANE_1	= MARGIN_Y;
const LANE_2	= LANE_1 + VERTICAL_LANE_SIZE;
const LANE_3	= LANE_2 + VERTICAL_LANE_SIZE;
const LANE_4	= LANE_3 + VERTICAL_LANE_SIZE;
const LANE_5	= LANE_4 + VERTICAL_LANE_SIZE;
const LANE_OFF	= LANE_5 + VERTICAL_LANE_SIZE;
const START_POS_TEAM_1 = 200;
const START_POS_TEAM_2 = 1100;

/** ----------- OTHER -----------------  */
const BAR_SIZE = 80;
const AI_FREQ_INIT = 10;
const AI_FREQ_FACTOR = 0.2;
const NEXT_LEVEL_POS = START_POS_TEAM_2 + 20;
const LOST_POS = START_POS_TEAM_1 - 20;
const GAMESIZE_X = 1440;
const GAMESIZE_Y = 810;