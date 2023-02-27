subJudul = document.getElementById("subJudul").innerHTML =
  "Menyuapi Kebutuhan ke-FOMO-an Pergadgetan Duniawi.";

// Get the button:
let mybutton = document.getElementById("scrollUp");

// When the user scrolls down 750px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 750 ||
    document.documentElement.scrollTop > 750
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollupFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
