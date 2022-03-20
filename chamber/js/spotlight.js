//store the resource, the URL of the JSON file into a const variable to start.
const requestURL = './data/data.json';
const cards = document.querySelector('.business-cards');

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
        //loop through every record and process each one into its own 'card' (HTML output), one at a time.
        //using a forEach method (Links to an external site.), define a function named "display" which will be called for each card record in the directory list.
        directory.forEach(displayCard);
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
//Loop through the list and create a new array that hold only membership gold and silver
//Get 3  random cards business and display to the DOM