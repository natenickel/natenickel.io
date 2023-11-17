document.addEventListener('DOMContentLoaded', function() {
    const directoryButton = document.getElementById('directory-button');
    const videoContainer = document.querySelector('.video-container');
  
    // Function to toggle the directory and show the video with a delay
    function toggleDirectoryWithDelay() {
      videoContainer.classList.add('show-video'); // Show the video
      setTimeout(function() {
        directoryButton.style.display = 'none'; // Hide the "Directory" button after a delay
      }, 1000); // Adjust the delay time (in milliseconds) as needed
    }
  
    // Initially, hide the video container
    videoContainer.classList.remove('show-video');
  
    // Add an event listener to the arrow for toggling the directory
    document.querySelector('.arrow').addEventListener('click', toggleDirectoryWithDelay);
  });
  