$(document).ready(function() {
	$.get('/moon_quake_api/duration/1960-10-10/2000-10-10/site/1/', function(j) {
		var h = Math.floor(Math.random() * (700) + 140);
		var randm = createData();
		delayRender(j, "hoge", randm[h % randm.length]);
	});
	//delayRender(createData(), "hoge", 1000);
	
});

function createData() {
	var arr = [];
	for (var j = 0; j < 10000; j++) {
		var ran = Math.random() * (700) + 140;
		if (ran > 300 && ran < 570) {
			arr.push(ran);
		}
	}
	return arr;
}

var callbacks = {};
callbacks.hoge = function(amp) {
	if (!amp) return;
	var categories = ['apollo14', 'apollo15', 'apollo16'];
	console.log(amp.moon_quake_id);
	var sound = new Amplitude.Sound();
	if (amp.moon_quake_id > 3) amp.moon_quake_id = 3;
	sound.play(amp.amplitude, 1, 100, categories[amp.moon_quake_id % categories.length]);
};
 
function delayRender(data, callbackName, msec) {
	console.log(data);
	if (!data) return false;
	function f() {
		if (!data.length) return;
		var param = data[0];
		data.shift();
		callbacks[callbackName](param);
		setTimeout(function() {f();}, msec);
	};
	f();
}