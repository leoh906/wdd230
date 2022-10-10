let navElement = document.getElementById('hamburger_button')
let navMenu = document.getElementById('')


navElement.addEventListener('click',toggleMenu);


function toggleMenu() {
    let toggleElement = document.getElementById('hamburger_content');
    if (toggleElement.style.display === "block") {
      toggleElement.style.display = "none";
    } else {
      toggleElement.style.display = "block";
      toggleElement.style.textAlign = "center";
    }
}