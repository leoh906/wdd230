/*Steps: */

    // 1. Create a fetch, to get data from a previously made JSON File 
console.log('Hello World')

getURL = 'https://leoh906.github.io/business_json_file/data.json'

// Creates a function to get the items of the JSON File  
async function getItems(getURL) {
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
        // let cardList = document.querySelector('.card_list')

cardButton.addEventListener("click",showCards);
tableButton.addEventListener("click",showTables);

    // Create a function to display the businesses in card view
    function showCards() {
        console.log('This Function Works')   
        businessDirectory.forEach(element => {

            let divElement = document.querySelector('.card_list')
            let divCard = document.createElement('div')
            divCard.setAttribute('id','business_card')
            let itemName = document.createElement('h1')
            let itemAddress = document.createElement('p')
            let itemTelephone = document.createElement('p')
            let itemURL = document.createElement('a')
            let itemImage = document.createElement('img')
    
            divElement.appendChild(divCard)
            divElement.appendChild(itemImage)
            divCard.appendChild(itemName)
            divCard.appendChild(itemAddress)
            divCard.appendChild(itemTelephone)
            divCard.appendChild(itemURL)
            
            itemImage.setAttribute('src',element.img)
            itemImage.setAttribute('alt',"Alternative Text for the Image")
            itemName.innerHTML = element.name;
            itemAddress.innerHTML = element.address;
            itemTelephone.innerHTML = element.telephone;
            itemURL.innerHTML = element.URL;
            
        });

        } // Ends the show cards function 
    
         // Create a function to display the businesses in table view
         function showTables() {
            console.log('This Function also works')
            businessDirectory.forEach(element => {
            let divObject = document.querySelector('.table_list')
            let divTable = document.createElement('table')
            let divRow = document.createElement('tr')
            let divItem = document.createElement('td')
            let tableName = document.createElement('p')
            let tableAddress = document.createElement('p')
            let tablePhone = document.createElement('p')
            let tableSite = document.createElement('p')

            divObject.appendChild(divTable)
            divTable.appendChild(divRow)
            divRow.appendChild(divItem)
            divItem.appendChild(tableName)
            divItem.appendChild(tableAddress)
            divItem.appendChild(tablePhone)
            divItem.appendChild(tableSite)

            tableName.innerHTML = element.name
            tableAddress.innerHTML = element.address
            tablePhone.innerHTML = element.telephone
            tableSite.innerHTML = element.URL            

            });
            
    
        }
    
   




    }
}; // This ends the large async function

// We call the large async function

getItems(getURL);












    
    
    