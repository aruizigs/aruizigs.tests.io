document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('videoPlayer');
    var playTime = 5000; // Tiempo de reproducción en milisegundos
    var initialTime = 0;

    video.addEventListener('loadedmetadata', function() {
        initialTime = video.duration * 1000; // Duración del vídeo en milisegundos
        if (initialTime < playTime) {
            // Si la duración del vídeo es menor que el tiempo de reproducción, lo reproducimos en bucle
            video.loop = true;
        }
        setTimeout(function() {
            video.pause();
        }, playTime); // Detener la reproducción después del tiempo especificado
    });
});
