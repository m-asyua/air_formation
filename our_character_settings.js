/*


配列を追加するとき，最後にカンマが不要であることに注意すること！！

	................

	'./opera2.gif',
	'./opera3.gif'   <<< ここはカンマ不要
	]   <<< ここはカンマ不要
];

	................
	[180, 250 ],
	[180, 250 ]   <<< ここはカンマ不要
];



*/





let vrm_files = [
	'./2023_04_c3_1.vrm',
	'./idol/idol_v2.vrm',
	'./idol/idol_v2.vrm',
	'./idol/idol_v3.vrm',
	'./idol/idol_v3.vrm'
];


let characters_position = [ 
		[  1.5,  0,  0 ],
		[  1.2,  0,  0 ],
		[  0.0,  0,  0 ],
		[ -1.2,  0,  0 ],
		[ -1.5,    0,  0 ]
	];

let characters_rotation = [ 
		[ 0,         0,    0],
		[ 0,         0,    0],
		[ 0,         0,    0],
		[ 0,         0,    0],
		[ 0,         0,    0]
	];


let characters_time = [
	0,
	5000,
	18000,
	20000,
	25000,
	35000,
	40000,
	50000
];



let the_number_of_section = 30;
//どんなフォーメーションであっても，
//１フォーメーションあたりの移動の数（刻みの数）を
//決めておく





	let camera_position = [ -20.5, 32.32, -302.50 ];
	let camera_rotation = [ -3.035, -0.067, -3.134  ]; //関係なし？






//	let camera_position = [ -11,0.125, -195.45  ];
//	let camera_rotation = [ -3.14,  -0.05,  -3.14 ]; //関係なし？

//	let camera_position = [ -19.06934259332644, 7.012735323447778 ,-194.71049734642583  ];
//	let camera_rotation = [-3.045149361723447, -0.10253458357191579, -3.1316908025659522  ]; //関係なし？



let camera_time = [
	0,
	20000,
	30000,
	40000
]


let camera_work = [
	[-20.5, 32.32, -302.50,    -3.040, -0.067, -3.134 ],
	[-10.7, 40.4,  -269.1,   -3,  -0.061,   -3.1],
	[-20.5, 32.32, -302.50,    -3.040, -0.067, -3.134 ],
	[-20.5, 32.32, -302.50,    -3.038, -0.067, -3.134 ]
]






let formation = [ 
	[
		[  1.5,  0,  0 ],
		[  1.2,  0,  0 ],
		[  0.0,  0,  0 ],
		[ -1.2,  0,  0 ],
		[ -1.5,    0,  0 ]
	],
	[
		[  1.5,  0,  0 ],
		[  1.2,  0,  0 ],
		[  0.0,  0,  0 ],
		[ -1.2,  0,  0 ],
		[ -1.5,    0,  0 ]
	],
	[
		[  0.0,  0,  -5 ],
		[  0.0,  0,  -5 ],
		[  0.0,  0,  -6 ],
		[  0.0,  0,  -5 ],
		[  0.0,  0,  -6 ]
	],
	[
		[  0.0,  0,  -5 ],
		[  0.8,  0,  -5 ],
		[  0.0,  0,  -5 ],
		[ -0.8,  0,  -5 ],
		[ -0.9,  0,  -5 ]
	],
	[
		[ 1.5, 0, 0 ],
		[  1.2,  0,  0 ],
		[  0.0,  0,  0 ],
		[ -1.2,  0,  0 ],
		[ -1.5,    0,  0 ]
	],
	[
		[  0.0,  0,  -5 ],
		[  1.5,  0,  -1 ],
		[  2.2,  0,  -5 ],
		[ -1.5,  0,  -1 ],
		[ -2.2,    0, -5 ]
	],
	[
		[  0.0,  0,  -1 ],
		[  0.0,  0,  -5 ],
		[  0.0,  0,  -1 ],
		[  0.0,  0,  -5 ],
		[  0.0,  0,  -1 ]
	],
	[
		[  0.0,  0,  -5 ],
		[  0.8,  0,  -5 ],
		[  0.0,  0,  -5 ],
		[ -0.8,  0,  -5 ],
		[ -0.9,    0, -5 ]
	]

];

let vrm_movement_x=[];
let vrm_movement_y=[];
let vrm_movement_z=[];
let vrm_movement_t=[];

let		camera_movement_x = [];
let			camera_movement_y = [];
let			camera_movement_z = [];
let			camera_movement_rx = [];
let			camera_movement_ry = [];
let			camera_movement_rz = [];
let			camera_movement_t = [];


//時間をどうやって測ろうか．．．不要？

function formation_calc(){
//xyzの座標は，そのままの位置の値が入る
//時間データは積算するので注意
//

//無理やり二元配列初期化
	for(let i=0;i<vrm_files.length;i++){
			vrm_movement_x[i] = [];
			vrm_movement_y[i] = [];
			vrm_movement_z[i] = [];
			vrm_movement_t[i] = [];
			camera_movement_x[i] = [];
			camera_movement_y[i] = [];
			camera_movement_z[i] = [];
			camera_movement_rx[i] = [];
			camera_movement_ry[i] = [];
			camera_movement_rz[i] = [];
			camera_movement_t[i] = [];

		for( j=0;j<the_number_of_section;j++){
			vrm_movement_x[i][j] = 0;
			vrm_movement_y[i][j] = 0;
			vrm_movement_z[i][j] = 0;
			vrm_movement_t[i][j] = 0;
			camera_movement_x[i][j] = 0;
			camera_movement_y[i][j] = 0;
			camera_movement_z[i][j] = 0;
			camera_movement_rx[i][j] = 0;
			camera_movement_ry[i][j] = 0;
			camera_movement_rz[i][j] = 0;
			camera_movement_t[i] = 0;
		}
	}


//////////////////

	let current_camera_parameter = new Array();
	let next_camera_parameter = new Array();
	let diff_camera_parameter = new Array();

	let base_c =0;
	for(let j=1;j<camera_work.length;j++){
		let current_camera_time = camera_time[j-1];
		let next_camera_time = camera_time[j];
		
		let d_camera_time = (next_camera_time-current_camera_time) / the_number_of_section;
		// セクションあたりの時間

		for(let p=0;p<6;p++){
			current_camera_parameter[p] = camera_work[j-1][p];
			next_camera_parameter[p] = camera_work[j][p];
			diff_camera_parameter[p] = (next_camera_parameter[p] - current_camera_parameter[p])/ the_number_of_section;
		}

		for(let k=0;k<the_number_of_section;k++){
			camera_movement_x[base_c+k]  = current_camera_parameter[0] + diff_camera_parameter[0]*k;
			camera_movement_y[base_c+k]  = current_camera_parameter[1] + diff_camera_parameter[1]*k;
			camera_movement_z[base_c+k]  = current_camera_parameter[2] + diff_camera_parameter[2]*k;
			camera_movement_rx[base_c+k] = current_camera_parameter[3] + diff_camera_parameter[3]*k;
			camera_movement_ry[base_c+k] = current_camera_parameter[4] + diff_camera_parameter[4]*k;
			camera_movement_rz[base_c+k] = current_camera_parameter[5] + diff_camera_parameter[5]*k;
			camera_movement_t[base_c+k]  = current_camera_time + d_camera_time*k;
		}
		base_c += the_number_of_section;
	}

//////////////////


	let d_all_time = 0;
console.log("calc1",characters_time,characters_time.length);
console.log("calc111",characters_time.length);
	//jは１からスタート
	
	let base_k =0;
	for( j=1;j<characters_time.length;j++){
		let current_time = characters_time[j-1];
		let next_time = characters_time[j];
		
		let d_time = (next_time-current_time) / the_number_of_section;
		// セクションあたりの時間
console.log("calc2");


		// xyzはまとめられるが，あえて分けている
		// あとで応用が利くように
		for(let i=0;i<vrm_files.length;i++){


console.log("calc3");

			let target_vrm = vrm_character_array[i];

			let current_position_x = formation[j-1][i][0]; // ここの配列0,1,2の違いに注意
			let next_position_x = formation[j][i][0];
			let diff_x = (next_position_x - current_position_x)/ the_number_of_section;

			let current_position_y = formation[j-1][i][1];
			let next_position_y = formation[j][i][1];
			let diff_y = (next_position_y - current_position_y)/ the_number_of_section;

			let current_position_z = formation[j-1][i][2];
			let next_position_z = formation[j][i][2];
			let diff_z = (next_position_z - current_position_z)/ the_number_of_section;

			for( k=0;k<the_number_of_section;k++){
console.log("calc4");
				vrm_movement_x[i][base_k+k] = current_position_x + diff_x*k;
				vrm_movement_y[i][base_k+k] = current_position_y + diff_y*k;
				vrm_movement_z[i][base_k+k] = current_position_z + diff_z*k;
				vrm_movement_t[i][base_k+k] = current_time + d_time*k;
			}
			
		}

		base_k += the_number_of_section;


	}
console.log("calc",vrm_movement_x);
console.log("calc",vrm_movement_y);
console.log("calc",vrm_movement_z);
console.log("calc",vrm_movement_t);


}

//実行ループ（キャラクタごと・時間ごと）
function my_formation(){

console.log("my_formation");

	let d_all_time = 0;
	let base_j=0;

	for( j=1;j<characters_time.length;j++){
		let current_time = characters_time[j-1];
		let next_time = characters_time[j];
		
		let d_time = (next_time-current_time) / the_number_of_section;

		for( k=0;k<the_number_of_section;k++){
			for(let i=0;i<vrm_files.length;i++){
				let target_vrm = vrm_character_array[i];
				let tx = vrm_movement_x[i][base_j+k];
				let ty = vrm_movement_y[i][base_j+k];
				let tz = vrm_movement_z[i][base_j+k];
				let d_time = vrm_movement_t[i][base_j+k];

//				d_all_time += d_time;
				//足し算が必要

				setTimeout( function(){
					console.log("settimeout",tx,ty,tz);
//					target_vrm.humanoid.getNormalizedBoneNode( 'hips' ).position.set(tx,ty,tz);
					target_vrm.scene.position.set(tx,ty,tz);
					renderer.render(scene, camera);
				},d_time);
			}
		}
		base_j +=the_number_of_section;
	}


//
//id="camera_movement" >数値設定したカメラの動きを使う<br />
//


	console.log("checked...",document.getElementById("camera_movement").checked);
if( document.getElementById("camera_movement").checked == false){
	console.log("checked...",document.getElementById("camera_movement").checked);
	return;
}

	let base_c =0;
	for( j=1;j<characters_time.length;j++){
		let current_time = characters_time[j-1];
		let next_time = characters_time[j];
		
		let d_time = (next_time-current_time) / the_number_of_section;

		for(let k=0;k<the_number_of_section;k++){
			let cx = camera_movement_x[base_c+k];
			let cy = camera_movement_y[base_c+k];
			let cz = camera_movement_z[base_c+k];
			let rx = camera_movement_rx[base_c+k];
			let ry = camera_movement_ry[base_c+k];
			let rz = camera_movement_rz[base_c+k];
			let d_time = camera_movement_t[base_c+k];
			
			setTimeout( function(){
				console.log("settimeout",cx,cy,cz);
				camera.position.set( cx, cy, cz);
				camera.rotation.set( rx, ry, rz);
				renderer.render(scene, camera);
			},d_time);

		}
		base_c += the_number_of_section;
	}

}






