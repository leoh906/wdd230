/*Steps: */

    // 1. Create a fetch, to get data from a previously made JSON File 
console.log('Hello World')

getURL = 'https://leoh906.github.io/wdd230/chamber/data.json'

// Creates a function to get the items of the JSON File  
async function getItems(getURL) {
    let generalListElement = document.querySelector('.business_cards')
    let divCard = document.createElement('div')
    divCard.setAttribute('class','business_card')
    let itemURL = document.createElement('a')
    let itemImage = document.createElement('img')
    let itemName = document.createElement('h1')
    let itemAddress = document.createElement('p')
    let itemTelephone = document.createElement('p')
    const response = await fetch(getURL);
    console.log(response);
    
    
    
    
    
// Always include this response
if(response.ok) {
    // Do all the stuff with JavaScript
    const jsObject = await response.json()
    console.log(jsObject)
    const businessDirectory = jsObject['companies']
    // Create two event listeners for each button that was created
    let cardButton = document.getElementById('card_view_button')
    let tableButton = document.getElementById('list_view_button')

// Fetch the json data to show on startup
businessDirectory.forEach(element => {
    let divCard = document.createElement('div')
    divCard.setAttribute('class','business_card')
    let itemURL = document.createElement('a')
    let itemImage = document.createElement('img')
    let itemName = document.createElement('h1')
    let itemAddress = document.createElement('p')
    let itemTelephone = document.createElement('p')
   

    generalListElement.appendChild(divCard)
    divCard.appendChild(itemImage)
    divCard.appendChild(itemName)
    divCard.appendChild(itemAddress)
    divCard.appendChild(itemTelephone)
    divCard.appendChild(itemURL)
    
    itemImage.setAttribute('src',element.img)
    itemImage.setAttribute('alt',"Alternative Text for the Image")
    itemName.innerHTML = element.name;
    itemAddress.innerHTML = element.address;
    itemTelephone.innerHTML = element.telephone;
    itemURL.setAttribute('href',element.URL);
    itemURL.setAttribute('target','_blank');
    itemURL.innerHTML = element.URL;
    
}); 







cardButton.addEventListener("click",showCards);
tableButton.addEventListener("click",showTables);



    // Create a function to display the businesses in card view
    function showCards() {
            console.log('This Function Works')
            // generalListElement.classList.remove('business_lists')
            // generalListElement.classList.add('business_cards')
            let tableRow = querySelectorAll('.business_cards')
            tableRow.forEach((item) => {
                item.remove();
            })

            businessDirectory.forEach(element => {
                let divCard = document.createElement('div')
                divCard.setAttribute('class','business_card')
                let itemURL = document.createElement('a')
                let itemImage = document.createElement('img')
                let itemName = document.createElement('h1')
                let itemAddress = document.createElement('p')
                let itemTelephone = document.createElement('p')
               
            
                generalListElement.appendChild(divCard)
                divCard.appendChild(itemImage)
                divCard.appendChild(itemName)
                divCard.appendChild(itemAddress)
                divCard.appendChild(itemTelephone)
                divCard.appendChild(itemURL)
                
                itemImage.setAttribute('src',element.img)
                itemImage.setAttribute('alt',"Alternative Text for the Image")
                itemName.innerHTML = element.name;
                itemAddress.innerHTML = element.address;
                itemTelephone.innerHTML = element.telephone;
                itemURL.setAttribute('href',element.URL);
                itemURL.setAttribute('target','_blank');
                itemURL.innerHTML = element.URL;
                
            }); 

            businessDirectory.forEach(element => {
                
            })
            
            
         
           

       
        }

      






 
   
    
         // Create a function to display the businesses in table view
         function showTables() {
            console.log('This Function also works')
            // generalListElement.classList.remove('business_cards')
            // generalListElement.classList.add('business_lists')
            let cardElements = document.querySelectorAll('.business_lists')
            cardElements.forEach((item) => {
                item.remove();
            })




          
           

            // businessDirectory.forEach(element => {


            // })

            
                
          








                       

            
            
    
        }
    } // Ends the if(ok) thingy
    
   



    
}; // This ends the large async function

// We call the large async function

getItems(getURL);












    
    
    