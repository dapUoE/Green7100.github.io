// Prevent context menu (right-click menu) on images
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// Toggle the visibility of the overlay text
function toggleOverlayText(element, event) {
    // Get the card-text-overlay element
    const overlayText = element.closest('.card').querySelector('.card-text-overlay');
    
    // Toggle visibility
    if (overlayText.style.display === 'none') {
        overlayText.style.display = 'block';
    } else {
        overlayText.style.display = 'none';
    }
    
    // Prevent the event from bubbling up to parent elements and prevent the default behavior of the anchor tag
    event.stopPropagation();
    event.preventDefault();
}


document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prevChapter');
    const nextButton = document.getElementById('nextChapter');
    
    const currentChapterNumber = getCurrentChapterNumber();

    if (prevButton) {
        prevButton.addEventListener('click', function() {
            if (currentChapterNumber > 1) {
                window.location.href = `arc8chapter${currentChapterNumber - 1}.html`;
            }
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', function() {
            window.location.href = `arc8chapter${currentChapterNumber + 1}.html`;
        });
    }
});

function getCurrentChapterNumber() {
    const currentURL = window.location.pathname;
    const chapterRegex = /arc8chapter(\d+)\.html/;
    const match = currentURL.match(chapterRegex);
    
    if (match && match[1]) {
        return parseInt(match[1], 10);
    }
    return 0;  // default, can be adjusted based on the structure
}

