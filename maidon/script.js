document.addEventListener("DOMContentLoaded", function () {
    // Get the "book-now-button" element
    const bookNowButton = document.getElementById("book-now-button");

    // Get the loading overlay element
    const loadingOverlay = document.getElementById("loading-overlay");

    // Add a click event listener to the button
    bookNowButton.addEventListener("click", function (event) {
        // Prevent the default action of the button, which is navigating to a new page
        event.preventDefault();

        // Show the loading overlay
        loadingOverlay.style.display = "flex"; // Display as a flex container

        // Delay the redirection for demonstration purposes (you can remove this in production)
        setTimeout(function () {
            // Hide the loading overlay
            loadingOverlay.style.display = "none";

            // Redirect to "search.html"
            window.location.href = "search.html";
        }, 5000); // Adjust the delay time as needed
    });
});
const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

