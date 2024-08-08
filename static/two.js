function handleFormSubmit(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var xhr = new XMLHttpRequest();

    // Select progress bar elements
    var progressBar = document.getElementById('upload-progress');
    var progressText = document.getElementById('progress-text');
    var progressContainer = document.querySelector('.progress-container');

    // Show the progress bar container
    progressContainer.classList.remove('hidden');

    xhr.open('POST', '/upload', true);
    xhr.responseType = 'blob';

    // Handle progress updates
    xhr.upload.onprogress = function (event) {
        if (event.lengthComputable) {
            var percentComplete = (event.loaded / event.total) * 100;
            progressBar.value = percentComplete;
            progressText.textContent = Math.round(percentComplete) + '%';
        }
    };

    xhr.onload = function () {
        if (xhr.status === 200) {
            // Create a link element to trigger the download
            var link = document.createElement('a');
            link.href = URL.createObjectURL(xhr.response);
            link.download = 'output.pptx';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Play sound before reloading
            var audio = new Audio('https://cdn.discordapp.com/attachments/1229435802296258642/1271097031758188656/dH4D4Zo.mp3?ex=66b618dc&is=66b4c75c&hm=581abd29dcbaa463f9ebdf117ab7f3f6c54dbbf462d9bbb64654456daf9f9d25&');
            audio.load(); // Ensure the audio is loaded
            audio.play().then(function() {
                // Reload the page after sound plays
                setTimeout(function() {
                    window.location.reload();
                }, audio.duration * 2000); // Wait for the sound to finish
            }).catch(function(error) {
                console.error('Audio playback failed', error);
                // Reload the page immediately if sound fails to play
                window.location.reload();
            });
        } else {
            console.error('Download failed');
        }
    };

    xhr.send(formData);
}
