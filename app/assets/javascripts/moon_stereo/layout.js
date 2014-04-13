// objectに合わせて縦にリサイズ
function onResize(mapElem, leftElem, rightElem) {
    var mapHeight = $(mapElem).height();
    var arrows = {
        left: $(leftElem).find('img').height(),
        right: $(rightElem).find('img').height()
    };
    $(leftElem).find("img").css("margin-top", (mapHeight - arrows.left) / 2);
    $(rightElem).find("img").css("margin-top", (mapHeight - arrows.right) / 2);
}

// windowサイズを変更ごとにリサイズ
$(window).resize(function() {
    onResize('#map3d', '.left-allow', '.right-allow');
});
