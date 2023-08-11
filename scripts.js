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
