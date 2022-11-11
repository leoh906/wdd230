// Starting off....Async Await
// The URL: https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json
const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

/* ASYNC Process 
-- We send a request to get
-- The computer finds
-- We get a response
*/



async function getProphets(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    // Always include this response
    if(response.ok) {
        // Do all the stuff with JavaScript
        const jsObject = await response.json()
        console.log(jsObject)
        const prophets = jsObject['prophets']
        console.log(prophets[0].lastname)
        prophets.forEach(displayProphets)
    }
}

getProphets(requestURL)

function displayProphets(item) {
    let card = document.createElement('section')
    let h2 = document.createElement('h2')
    let birthDate = document.createElement('p')
    let birthPlace = document.createElement('p')
    let portraitPicture = document.createElement('img')

    h2.textContent = item.name + ' ' + item.lastname;
    birthDate.textContent = 'Date of Birth:' + item.birthdate;
    birthPlace.textContent = 'Place of Birth:' + item.birthplace;
    portraitPicture.src = item.imageurl;
    card.appendChild(h2)
    card.appendChild(birthDate)
    card.appendChild(birthPlace)
    card.appendChild(portraitPicture)
    document.querySelector('.cards').appendChild(card)
    
// Challenge get another text like death
// An additional paragraph with information



}