/**
 * Created by ryohei on 2014/04/13.
 */

onload = function() {
    draw();
};

function draw() {
    /* canvas要素のノードオブジェクト */
    var canvas = document.getElementById('moon_age');


    /* canvas要素の存在チェックとCanvas未対応ブラウザの対処 */
    if ( ! canvas || ! canvas.getContext ) {
        return false;
    }

    var cx = canvas.width / 2;
    var cy = canvas.height / 2;

    var r; // Radius of the moon
    if(cx > cy) {
        r = cy;
    } else {
        r = cx;
    }

    /* 2Dコンテキスト */
    var ctx = canvas.getContext('2d');
    /* 四角を描く */
    ctx.beginPath();

    ctx.fillStyle = 'yellow';
    ctx.arc(cx, cy, r, Math.PI*1.5, Math.PI*2, false);
    ctx.fill();

    ctx.closePath();
    ctx.stroke();
}