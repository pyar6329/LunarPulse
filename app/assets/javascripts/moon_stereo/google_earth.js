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
    var lookAt = ge.createLookAt('');

    // 現在いる位置をセットする
    var seismometerId = 0;

    lookAt.setLatitude(SEISMOMETER[seismometerId].lat); // 緯度の指定
    lookAt.setLongitude(SEISMOMETER[seismometerId].lng); // 軽度の指定
    lookAt.setRange(CAMERA_CONTROL.range); //高度の指定
    lookAt.setTilt(CAMERA_CONTROL.tilt); // カメラの傾きの指定

    // 現在いる位置を反映させる
    ge.getView().setAbstractView(lookAt);

    // cameraオブジェクトの作成

}


// 失敗時のCallBack
function failureCB(errorCode) {
    console.log('error');
}

// google earth apiを呼び出す
$(function(){
    google.setOnLoadCallback(init);
});
