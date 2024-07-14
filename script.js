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

        // Try to play the video
        var playPromise = video.play();

        if (playPromise !== undefined) {
            playPromise.then(function() {
                console.log('Video autoplay started with sound.');
            }).catch(function(error) {
                console.error('Video autoplay failed:', error);
                // Fallback: play after user interaction
                document.addEventListener('click', function() {
                    video.play().then(function() {
                        console.log('Video playback started after user interaction.');
                    }).catch(function(error) {
                        console.error('Video playback still blocked after user interaction:', error);
                    });
                }, { once: true });
            });
        }
    }

    // Attempt autoplay immediately
    attemptAutoplay();
});
