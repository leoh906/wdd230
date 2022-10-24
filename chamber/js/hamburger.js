let navElement = document.getElementById('hamburger_button')


navElement.addEventListener('click',toggleMenu);


function toggleMenu() {
    let toggleElement = document.getElementById('menu_items');
    if (toggleElement.style.display === "block") {
      toggleElement.style.display = "none";
      toggleElement.style.textAlign = "center";
      toggleElement.style.flexDirection = "column"
    } else {
      toggleElement.style.display = "block";
      toggleElement.style.textAlign = "center";
    }
}