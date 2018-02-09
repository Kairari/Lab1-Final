var Hamburger = document.getElementsByClassName("hamburger-button");
var Links = document.getElementsByClassName("nav-links");

if (Hamburger.length) {
  Hamburger[0].addEventListener('click', function() {
    console.log("hello");
    if(Links.length){
      Links[0].classList.toggle("open");
    }
  });
}
