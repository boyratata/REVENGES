document.addEventListener('DOMContentLoaded', function () {
    var video = document.createElement('video');
    video.loop = true;
    video.className = 'video-background';

    var source = document.createElement('source');
    source.src = 'https://github.com/boyratata/REVENGES/raw/main/background.mp4'; // Replace with your video URL
    source.type = 'video/mp4';

    video.appendChild(source);
    document.body.appendChild(video);

    // Function to attempt playing the video with sound
    function attemptAutoplay() {
        video.muted = false; // Attempt to play with sound
        video.play().then(function() {
            console.log('Video autoplay started with sound.');
        }).catch(function(error) {
            console.error('Video autoplay failed:', error);
        });
    }

    // Attempt autoplay immediately
    attemptAutoplay();

    // Fallback if autoplay is blocked
    video.addEventListener('pause', function() {
        console.log('Video autoplay blocked.');

        // Attempt to play again after a short delay
        setTimeout(function() {
            attemptAutoplay();
        }, 1000); // Delay in milliseconds
    });
});
