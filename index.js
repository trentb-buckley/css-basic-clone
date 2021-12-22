
// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // console.log(document.body.scrollTop)
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //   console.log(document.body.scrollTop)
    document.getElementById("top-left-h1").style.fontSize = "30px";
    document.getElementById("top-left-h1").style.color = "gold";
    document.querySelector('header').style.backgroundColor = "#191919";
    document.querySelector('header').style.opacity = '1';
    
  } else {
    //   console.log(document.body.scrollTop)
      document.getElementById("top-left-h1").style.fontSize = "40px";
      document.querySelector('header').style.opacity = "1";
      document.querySelector('header').style.height = '20px';
      document.querySelector('header').style.background = "none"
  }
}