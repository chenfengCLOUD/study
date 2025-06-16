//videoplayer.js

// var contentJs;
// var actionsJs;
// var windowJs;

// function initial(content,actions,window) {
//     contentJs = content;
//     actionsJs = actions;
//     windowJs = window;
// }
//?????????

function open(){
    content.dialog.fileOpen.open();
}

function play(){
    content.player.play();
}

function pause(){
    content.player.pause();
}

function stop(){
    content.player.stop();
}

function close() {
    content.player.stop();
    content.player.source = "";
    actions.start.enabled = false;
    actions.pause.enabled = false;
    actions.stop.enabled = false;
}

function fullScreen() {
    // fullScreen版本（33333）
    if (window.visibility === 5) {
        window.showNormal();
    } else {
        window.showFullScreen();
    }
}

function updateButtonStates() {
        if (content.player.playbackState === MediaPlayer.PlayingState) {
            actions.start.enabled = false
            actions.pause.enabled = true
            actions.stop.enabled = true
        } else if (content.player.playbackState === MediaPlayer.PausedState) {
            actions.start.enabled = true
            actions.pause.enabled = false
            actions.stop.enabled = true
        } else if (content.player.playbackState === MediaPlayer.StoppedState) {
            actions.start.enabled = true
            actions.pause.enabled = false
            actions.stop.enabled = false
        }
    }
