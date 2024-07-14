document.addEventListener('DOMContentLoaded', function () {
    var video = document.createElement('video');
    video.autoplay = true;
    video.loop = true;
    video.muted = false; // Ensure video is not muted
    video.className = 'video-background';

    var source = document.createElement('source');
    source.src = 'https://github.com/boyratata/REVENGES/raw/main/background.mp4'; // Replace with your video URL
    source.type = 'video/mp4';

    video.appendChild(source);
    document.body.appendChild(video);

    // Ensure video plays when unmuted
    video.play().catch(function(error) {
        console.error('Video playback was prevented:', error);
        // Fallback: attempt to play again after user interaction
        document.addEventListener('click', function() {
            video.play().then(function() {
                console.log('Video playback started after user interaction.');
            }).catch(function(error) {
                console.error('Video playback still prevented after user interaction:', error);
            });
        }, { once: true });
    });
});
