

/* Slideshow

    The Javascript below is respsonsible for making the slideshow in my website function.

    Author: W3 Schools 
*/

/*--------------------------------------------------------------->
  The code in this section was sourced from W3 Schools at https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto*/

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

/*--------------------------------------------------------------->         */

/* Mobile navigation menu

    The Javascript below is respsonsible for .

    Author: W3 Schools 
*/

/*--------------------------------------------------------------->
  The code in this section was sourced from W3 Schools at https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar*/

function myFunction() {
  var x = document.getElementById("mobile-nav-items");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
  /*--------------------------------------------------------------->         */

  var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }