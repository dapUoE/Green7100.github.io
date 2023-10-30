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

/* Change chapter numbers */

document.addEventListener('DOMContentLoaded', function() {
  attachChapterNavigation('prevChapter');
  attachChapterNavigation('nextChapter');
  attachChapterNavigation('prevChapterBottom', 'prevChapter');
  attachChapterNavigation('nextChapterBottom', 'nextChapter');
});

function attachChapterNavigation(buttonId, actionId) {
  actionId = actionId || buttonId;
  const button = document.getElementById(buttonId);

  if (button) {
      button.addEventListener('click', function() {
          const [currentArcNumber, currentChapterNumber] = getCurrentArcAndChapterNumbers();
          let newURL;

          if (actionId === 'prevChapter' && currentChapterNumber > 1) {
              newURL = `arc${currentArcNumber}chapter${currentChapterNumber - 1}.html`;
          } else if (actionId === 'nextChapter') {
              newURL = `arc${currentArcNumber}chapter${currentChapterNumber + 1}.html`;
          }

          if (newURL) {
              fetch(newURL).then(response => {
                  if (response.ok) {
                      window.location.href = newURL;
                  } else {
                      window.location.href = '/ReZero.html';
                  }
              });
          }
      });
  }
}

function getCurrentArcAndChapterNumbers() {
  const currentURL = window.location.pathname;
  const arcChapterRegex = /arc(\d+)chapter(\d+)\.html/;
  const match = currentURL.match(arcChapterRegex);
  
  if (match && match[1] && match[2]) {
      return [parseInt(match[1], 10), parseInt(match[2], 10)];
  }
  return [0, 0];  // default values, can be adjusted based on the structure
}


//Privacy Policy
window.addEventListener("load", function(){
    window.cookieconsent.initialise({
      "palette": {
        "popup": {
          "background": "#edeff5",
          "text": "#838391"
        },
        "button": {
          "background": "#4b81e8"
        }
      },
      "position": "bottom-left", // You can adjust this as needed
      "type": "info", // This makes the banner more unintrusive
      "content": {
        "message": "This site uses cookies for analytics and comments.",
        "dismiss": "Got it!",
        "link": "Learn More",
        "href": "/privacy-policy.html" // Link to your privacy policy page
      }
    });
});


//Cookie Consent
window.addEventListener("load", function(){
    window.cookieconsent.initialise({
      "palette": {
        "popup": {
          "background": "#edeff5",
          "text": "#838391"
        },
        "button": {
          "background": "#4b81e8"
        }
      },
      "type": "opt-out",  // This makes sure that cookies are disabled until the user opts-in
      "position": "bottom-right",
      "content": {
        "message": "This site uses cookies in order see how many users the website gets, like views on Youtube. If you are uncomfortable with this, you can Deny access.",
        "allow": "Allow selected",
        "deny": "Deny",
        "link": "Learn More",
        "href": "/privacy-policy.html",
        "policy": "Cookie Policy"
      },
      "law": {
        "regionalLaw": false,
        "countryCode": "US"  // Replace with your country code if not in the US
      },
      "onStatusChange": function(status) {
        // Handle the cookie status (accepted or denied)
        if (status === "allow") {
          enableCookies();
        } else {
          disableCookies();
        }
      },
      "categories": {
        "necessary": {
          "needed": true,
          "wanted": true,
          "checked": true
        },
        "analytics": {
          "needed": false,
          "wanted": false,
          "checked": false
        },
        "comments": {
          "needed": false,
          "wanted": false,
          "checked": false
        }
      }
    });
});

function enableCookies() {
    // Enable Google Analytics and Disqus here
}

function disableCookies() {
    // Disable Google Analytics and Disqus here
}

function enableCookies() {
    // Enable Google Analytics
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'YOUR-GA-CODE', 'auto');
    ga('send', 'pageview');

    // For Disqus, you'd typically reload the Disqus thread if it's present on the page.
    if (typeof DISQUS !== 'undefined') {
        DISQUS.reset({
            reload: true
        });
    }
}

function disableCookies() {
    // Disable Google Analytics (prevent further tracking)
    window['ga-disable-YOUR-GA-CODE'] = true; // Replace 'YOUR-GA-CODE' with your actual GA code

    // For Disqus, you might choose to hide the comments section or display a message
    // indicating that comments are disabled due to cookie preferences.
}
