(function() {
    const audios = Array.from(document.querySelectorAll('audio'));
    if (audios.length === 0) {
        console.log('No audio elements found.');
        return;
    }
    let currentIndex = 0;
    function playNext() {
        if (audios.length === 0) return;

        const audio = audios[currentIndex];
        audio.play();
        audio.onended = function() {
            currentIndex = (currentIndex + 1) % audios.length;
            playNext();
        };
    }
    playNext();
})();
