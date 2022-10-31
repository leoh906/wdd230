
let documentItem = document.getElementById('discover_page_date')

if(localStorage.getItem('lastVisit')) {
    // Get value from Local Storage
    let previousItem = localStorage.getItem('lastVisit')
    // Get Todays Date
    let thisDate = Date.now(); 
    // Subtract the variables
    let subtractValue = thisDate - previousItem;
    let editSubtract = subtractValue/1000/60/60/24;
    documentItem.innerHTML = Math.round(editSubtract);


}

else {
    localStorage.setItem('lastVisit',Date.now());
    let todaysDate = localStorage.getItem('lastVisit');
    documentItem.innerHTML = todaysDate;

}

