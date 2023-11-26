const threshold = 0.30;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: threshold
};

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > threshold) {
            entry.target.classList.add('reveal-visible');
            entry.target.classList.remove('reveal');
            observer.unobserve(entry.target);
        }
    });
};

document.documentElement.classList.add('reveal-loaded');

window.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(handleIntersect, options);
    const targets = document.querySelectorAll('.reveal');
    targets.forEach(function (target) {
        observer.observe(target);
    });

    const podcastAudio = document.getElementById('podcast-audio');
    const playBtn = document.getElementById('podcast-play');
    const pauseBtn = document.getElementById('podcast-pause');

    playBtn.addEventListener('click', playShow);
    pauseBtn.addEventListener('click', pauseShow);

    playShow(); // Automatically play the audio when the page loads
});

function playShow() {
    const podcastAudio = document.getElementById('podcast-audio');
    const playBtn = document.getElementById('podcast-play');
    const pauseBtn = document.getElementById('podcast-pause');

    if (podcastAudio) {
        podcastAudio.play();
        playBtn.style.display = "none";
        pauseBtn.style.display = "inline-block";
    }
}

function pauseShow() {
    const podcastAudio = document.getElementById('podcast-audio');
    const playBtn = document.getElementById('podcast-play');
    const pauseBtn = document.getElementById('podcast-pause');

    if (podcastAudio) {
        podcastAudio.pause();
        playBtn.style.display = "inline-block";
        pauseBtn.style.display = "none";
    }
}
