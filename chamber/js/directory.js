/*directory page*/
//store the resource, the URL of the JSON file into a const variable to start.
const requestURL = 'https://nhaingo.github.io/wdd230/chamber/data/data.json';
const cards = document.querySelector('.business-cards');
const listcards = document.querySelector('.business-lists');
let table = document.createElement('table');

//use a basic fetch() method and feed it the required argument, the URL and use the .then() method that returns a Promise which response we will work with as an argument to an anonymous function. 
//extract the JSON content from the noise of the full HTTP response by using the json() method.
//The second .then() method is then setup for us to work with the converted response data in JavaScript object format.
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); //temporary checking for valid response and data parsing
         //store the results of the converted response into an array since the data source is a neatly packed array of records named "directory"
        const cards = jsonObject.directory;
        cards.forEach(displayCard);
        const listcards = jsonObject.directory;
        listcards.forEach(listCard);
        //loop through every record and process each one into its own 'card' (HTML output), one at a time.
        //using a forEach method (Links to an external site.), define a function named "display" which will be called for each card record in the directory list
    });
   

//define a function named display()  that take one parameter "company" and receive each elements of the directory array.
function displayCard(card) {
    // Create elements to add to the document
    let businessCard = document.createElement('section');
    let companyname = document.createElement ('p');
    let address = document.createElement ('p');
    let email = document.createElement ('a');
    let icon = document.createElement('img');
    let phone = document.createElement ('p');
    let website = document.createElement ('a');

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    icon.setAttribute('src', card.imageurl);
    icon.setAttribute('alt', `Company logo  of ${card.company}`);
    icon.setAttribute('loading', 'lazy');

     // Change the textContent property of all 'p' elements
    companyname.textContent = `${card.company}`;
    address.textContent=`${card.address}`;
    phone.textContent=`${card.phone}`;

    //Build the link a href by using setAttribute method for the href
    website.setAttribute('href',card.website);
    website.setAttribute('target', "_blank");
    website.textContent = `${card.website}`;
    email.setAttribute('href', card.email);
    email.textContent = `${card.email}`;
    

  // Add/append the section(card) with the h2 element
    businessCard.appendChild(icon);
    businessCard.appendChild(companyname);
    businessCard.appendChild(address);
    businessCard.appendChild(website);
    businessCard.appendChild(phone);
    businessCard.appendChild(email);
    

  // Add/append the existing HTML div with the cards class with the section(businessCard)
    cards.appendChild(businessCard);
}
/*function listCard(card) {
  // Create elements to add to the document
  let listCard = document.createElement('section');
  let companyname = document.createElement ('p');
  let address = document.createElement ('p');
  let phone = document.createElement ('p');
  let website = document.createElement ('a');

// Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).

   // Change the textContent property of all 'p' elements
  companyname.textContent = `${card.company}`;
  address.textContent=`${card.address}`;
  phone.textContent=`${card.phone}`;

  //Build the link a href by using setAttribute method for the href
  website.setAttribute('href',card.website);
  website.setAttribute('target', "_blank");
  website.textContent = `${card.website}`;
  

// Add/append the section(card) with the h2 element
  listCard.appendChild(companyname);
  listCard.appendChild(address);
  listCard.appendChild(website);
  listCard.appendChild(phone);
  

// Add/append the existing HTML div with the cards class with the section(businessCard)
  listcards.appendChild(listCard);
}*/
function listCard(card){

  let row = document.createElement('tr');
  let row_data = document.createElement('td');
  row_data.innerHTML = `${card.company}`;
  let row_data1 = document.createElement('td');
  row_data1.innerHTML = `${card.address}`;
  let row_data2 = document.createElement('td');
  row_data2.innerHTML = `${card.phone}`;

  let row_data3 = document.createElement('td');
  let link = document.createElement('a');
  link.setAttribute('href', 'card.website');
  link.setAttribute('target', "_blank");
  link.textContent = `${card.website}`;
  row_data3.appendChild(link);

  row_data.setAttribute('class', 'listcompany');
  row_data1.setAttribute('class', 'listaddress');
  row_data2.setAttribute('class', 'listphone');
  row_data3.setAttribute('class', 'listwebsite');
  
  table.appendChild(row);
  row.appendChild(row_data);
  row.appendChild(row_data1);
  row.appendChild(row_data2);
  row.appendChild(row_data3);
   
  listcards.appendChild(table);
}



