onload = function() {
    draw()
}

function draw() {
    var canvas = document.getElementById('canvas');
    if(!canvas || !canvas.getContext) {
        return false;
    }
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    //ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)
    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.arc(230+360,240,10,0,Math.PI*2,false);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'rgb(0, 255, 0)';
    ctx.arc(400+360,320,10,0,Math.PI*2,false);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'rgb(0, 0, 255)';
    ctx.arc(250+350,450,10,0,Math.PI*2,false);
    ctx.fill();
}
