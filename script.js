// Automatic Slideshow - change image every 4 seconds
var currentIndex = 0;
var newIndex = 0;

function carousel() {
    var x = document.getElementsByClassName("slide");
    while (newIndex == currentIndex) {
      newIndex = Math.floor(Math.random() * x.length);
    }
    currentIndex = newIndex;
    console.log(currentIndex);
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[currentIndex].style.display = "block";  
    setTimeout(carousel, 4000);
  }

// Used to toggle the menu on small screens when clicking on the menu button
function shrinkNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
    
function hidePopup() {
  document.getElementById('popup').style.display = "none";
}