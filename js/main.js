$('body').on('click touchstart', function () {
    const videoElement = document.getElementById('face_video');
    if (videoElement.playing) {
        // video is already playing so do nothing
        //console.log('playing');
    }
    else {
        // video is not playing
        // so play video now
        videoElement.play();
       // console.log('play it');
    }
});