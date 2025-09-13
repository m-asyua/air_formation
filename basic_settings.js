
let animation_speed = 1.1;


let song_type = [
	"アイドル",
	"演歌",
	"オペラ",
];
// 「アップロードファイル」は自動的に最後に追加
// 順番はsong_patternに対応



let song_pattern = [
	[
	'./idol/walk0.vrma',
	'./idol/walk1.vrma',
	'./idol/walk2.vrma',
	'./idol/walk2.vrma'    // walk3は作っていないのでwalk2を使いまわし
	],
	[
	'./vrma/enka0.vrma',
	'./vrma/enka1.vrma',
	'./vrma/enka2.vrma',
	'./vrma/enka3.vrma'
	],
	[
	'./vrma/opera0.vrma',
	'./vrma/opera1.vrma',
	'./vrma/opera2.vrma',
	'./vrma/opera3.vrma'
	]
];
//song typeに応じて追加可能


let level1_value  = 0.21;
let level2_value  = 0.31;
let level3_value  = 0.351;



// 描画領域の横幅，縦幅
let  width    =    1300;
let  height   =    800;

// 描画領域の位置，縦，横
let  character_top      =  10;
let  character_left     =  10;

//口を開く・開かない
let mouth_sw_flg = 1;

//背景画像
let background_image =null;//"./502265_ac_illust.png";


// ボリュームを何倍にする
let volume_times = 2;

//数を減らすと反応速度が速くなる．しかし敏感になりすぎる
//増やすと反応速度は遅くなるが，動きが安定する
let e_counter_setting = 30;

//
volumeCallback_interval = 50;
