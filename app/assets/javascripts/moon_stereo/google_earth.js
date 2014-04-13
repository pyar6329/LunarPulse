/**
 * Created by pyar6329 on 4/9/14 AD.
 */

/**
 * 月震計の定数
 * ・月震計の名前: name
 * ・緯度: latitude
 * ・軽度: longitude
 *
 * ・アポロ14号: SEISMOMETER[0]
 * ・アポロ15号: SEISMOMETER[1]
 * ・アポロ16号: SEISMOMETER[2]
 *
 */
var SEISMOMETER = [
    {'name': 'Apollo14', 'lat': -3.3843, 'lng': -17.2816},
    {'name': 'Apollo15', 'lat': 26.0755, 'lng': 3.3801},
    {'name': 'Apollo16', 'lat': -8.5822, 'lng': 15.3000}
];

/**
 * カメラ制御の定数
 * ・高度: range
 * ・角度: tilt
 *
 */

var CAMERA_CONTROL = {'range': 1000000.0, 'tilt': 90.0};


var ge;
google.load('earth', '1', {'other_params':'sensor=true_or_false'});


// Get the current view.
var camera;
var lookAt;

// 初期化関数
function init() {
    // 月面を指定して初期化
    google.earth.createInstance('map3d', initCB, failureCB, { database: 'http://khmdb.google.com/?db=moon' });
}


// 成功時のCallBack
function initCB(instance) {
    ge = instance;
    ge.getWindow().setVisibility(true);

    // LookAtオブジェクトの作成
    //    var lookAt = ge.createLookAt('');
    lookAt = ge.createLookAt('');

    // 現在いる位置をセットする
    var seismometerId = 0;

    lookAt.setLatitude(SEISMOMETER[seismometerId].lat); // 緯度の指定
    lookAt.setLongitude(SEISMOMETER[seismometerId].lng); // 軽度の指定
    lookAt.setRange(CAMERA_CONTROL.range); //高度の指定
//    lookAt.setTilt(CAMERA_CONTROL.tilt); // カメラの傾きの指定

    // 現在いる位置を反映させる
    ge.getView().setAbstractView(lookAt);

    // google earthが表示された後に、Allowをリサイズ
    onResize('#map3d', '.left-allow', '.right-allow');

    // cameraオブジェクトの作成
    camera = ge.getView().copyAsCamera(ge.ALTITUDE_RELATIVE_TO_GROUND);
}


// 失敗時のCallBack
function failureCB(errorCode) {
    console.log('error');
}

// google earth apiを呼び出す
$(function(){
    google.setOnLoadCallback(init);
    var currentRollAngle = 0; //現在の回転角
    var addRightAngle = 0; // 右に何度回転したか
    var addLefAngle = 0; // 左に何度回転したか
    var MAX_ANGLE = 180; // 最大の回転角
    var ANGLE = 10; // どの位回転させるか
    var LoE = 30;
    var isLeftReset = false;
    var me = this;

    // left-allowにマウスオーバーしたとき
    $('#l-allow-button').hover(
        function(){
            // マウスオーバー処理
<<<<<<< HEAD
            if (!ge) return false;
            ge.getOptions().setFlyToSpeed(currentFlySpeed); // カメラの移動速度を設定する
=======
            //  $(this).css('opacity', 1);

            // Set the FlyTo speed.
            ge.getOptions().setFlyToSpeed(5);
>>>>>>> 8ed285ad34b0a87dbc0b121335408402d5d6c934

            camera = ge.getView().copyAsCamera(ge.ALTITUDE_RELATIVE_TO_GROUND);

            if (camera.getLongitude() == -180) {
                camera.setLongitude(camera.getLongitude() + 360);
                isLeftReset = true;
            }
            camera.setTilt(LoE);
            camera.setLongitude(camera.getLongitude() - ANGLE)

            //console.log(camera.getRoll());
            //addLefAngle += ANGLE_UP;
            //addRightAngle -= ANGLE_UP;
            //currentRollAngle = camera.getRoll() + addRightAngle + addLefAngle;
            //camera.setRoll(currentRollAngle);

            //if (currentRollAngle == MAX_ANGLE) {
            // ０度に戻す。
            //}

            console.log(camera.getLongitude());
            ge.getView().setAbstractView(camera);
        },function(){
            // マウスアウト処理
            //$(this).css('opacity', 0.5);
        }
    );

    // right-allowにマウスオーバーしたとき
    $('#r-allow-button').hover(
        function(){
<<<<<<< HEAD
        	if (!ge) return false;
            // マウスオーバー処理
            ge.getOptions().setFlyToSpeed(currentFlySpeed);
=======
            ge.getOptions().setFlyToSpeed(5);
>>>>>>> 8ed285ad34b0a87dbc0b121335408402d5d6c934

            camera = ge.getView().copyAsCamera(ge.ALTITUDE_RELATIVE_TO_GROUND);

            if (camera.getLongitude() == 180) {
                camera.setLongitude(camera.getLongitude() - 360);
                isLeftReset = true;
            }
            camera.setTilt(LoE);
            camera.setLongitude(camera.getLongitude() + ANGLE)

            // マウスオーバー処理
            // addLefAngle -= ANGLE_UP;
            // addRightAngle += ANGLE_UP;
            // currentRollAngle = camera.getRoll() + addRightAngle;
//            camera.setRoll(currentRollAngle);
            //            camera.setRoll(currentRollAngle);
//            camera.setTilt(camera.getTilt()+80);
            // console.log(currentRollAngle);

//            if(currentRollAngle == -180){
//            }
            // camera.setAltitude(camera.getAltitude() + 500000);


            console.log(camera.getLongitude());
            ge.getView().setAbstractView(camera);
        },function(){
            // マウスアウト処理
        }
    );
});
