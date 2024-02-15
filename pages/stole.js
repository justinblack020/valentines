document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('cameraFeed');
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                videoElement.srcObject = stream;
            })
            .catch(function(error) {
                console.log("Something went wrong!", error);
            });
    }
});
