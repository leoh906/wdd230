let navElement = document.getElementById('hamburger_button')


navElement.addEventListener('click',toggleMenu);


function toggleMenu() {
    let toggleElement = document.getElementById('hamburger_content');
    if (toggleElement.style.display === "block") {
      toggleElement.style.display = "none";
      toggleElement.style.textAlign = "center";
    } else {
      toggleElement.style.display = "block";
      toggleElement.style.textAlign = "center";
    }
}