$(document).ready(function() {
    controller = new Leap.Controller("ws://localhost:6437/");
    listener = new Leap.Listener();

    listener.onFrame = function(controller) {
        var frame = controller.frame();
        var hands = frame.hands();
        var pointables = frame.pointables();

        var gestures = frame.gestures();

        $("#rotationAxis").text(pointables.length);
        $("#gestureDetected").text(gestures[0]);
    }

    controller.addListener(listener);
    controller.enableGesture("swipe", true);
    listener.onConnect = function(controller) {
        // calibrate = new Leap.Calibrate(controller);
        // calibrate.onComplete = function(screen){
        // }
    }
});

// Setup Leap loop with frame callback function
var controllerOptions = {enableGestures: true};

Leap.loop(controllerOptions, function(frame) {

    if (frame.gestures.length > 0) {
        for (var i = 0; i < frame.gestures.length; i++) {
            var gesture = frame.gestures[i];

            if (gesture.type == "swipe") {
                //Classify swipe as either horizontal or vertical
                var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
                //Classify as right-left or up-down
                if(isHorizontal){
                    if(gesture.direction[0] > 0){
                        swipeDirection = "right";
                    } else {
                        swipeDirection = "left";
                    }
                } else { //vertical
                    if(gesture.direction[1] > 0){
                        swipeDirection = "up";
                    } else {
                        swipeDirection = "down";
                    }
                }
            }
        }
    }

})
