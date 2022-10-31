let lastVisited = Date.lastVisited;
let current = new Date();
const theElement = document.getElementById('discover_page_date')
// let daysSince = XMLDocument
theElement.innerHTML = current - lastVisited;
