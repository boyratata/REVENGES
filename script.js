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
        video.muted = true; // Start muted to attempt autoplay
        video.play().then(function() {
            console.log('Video autoplay started with sound.');
            video.muted = false; // Unmute after successful play
        }).catch(function(error) {
            console.error('Video autoplay failed:', error);

            // Fallback: Retry after a short delay
            setTimeout(function() {
                attemptAutoplay();
            }, 1000); // Delay in milliseconds (adjust as needed)
        });
    }

    // Attempt autoplay immediately
    attemptAutoplay();
});
