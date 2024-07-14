document.addEventListener('DOMContentLoaded', function () {
    var video = document.createElement('video');
    video.autoplay = true;
    video.loop = true;
    video.muted = true; // Ensure video is muted
    video.className = 'video-background';
    var source = document.createElement('source');
    source.src = 'https://github.com/boyratata/REVENGES/raw/main/background.mp4'; // Replace with your video URL
    source.type = 'video/mp4';
    video.appendChild(source);
    document.body.appendChild(video);
});
