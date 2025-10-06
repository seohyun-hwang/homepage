//Mobile Menu for Navbar
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
  });
})

//External-file text-loading
function loadTextFromExternalFile(filename) {
  fetch(filename).then(function (response) {
    return response;
  }).then(function (data) {
    return data.text();
  }).then(function(fileContents) {
    document.getElementById("external-text-display").innerHTML = fileContents;
  }).catch(function (error) {
    console.log('Fetch problem show: ' + error.message);
  })
}
