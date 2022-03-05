//store the resource, the URL of the JSON file into a const variable to start.
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

//use a basic fetch() method and feed it the required argument, the URL and use the .then() method that returns a Promise which response we will work with as an argument to an anonymous function. 
//extract the JSON content from the noise of the full HTTP response by using the json() method.
//The second .then() method is then setup for us to work with the converted response data in JavaScript object format.
//test to see if we get a valid, parsed response using a console.table() method to output the results to the console.
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); //temporary checking for valid response and data parsing
         //store the results of the converted response into an array since the data source is a neatly packed array of records named "prophets"
        const prophets = jsonObject['prophets'];
        //loop through every record and process each one into its own 'card' (HTML output), one at a time.
        //using a forEach method (Links to an external site.), define a function named "displayProphets" which will be called for each prophet record in the prophets list.
        prophets.forEach(displayProphets);
    });

   

//define a function named displayProphets()  that take one parameter "prophet" and receive each elements of the prophets array.
function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birthplace = document.createElement ('p');
    let birthday = document.createElement ('p');
    let portrait = document.createElement('img');
    let order = '';
    
    if(prophet.order === 1) {
        order = `${prophet.order}st`;
    } else if (prophet.order === 2) {
        order = `${prophet.order}nd`;
    } else if (prophet.order === 3) {
        order = `${prophet.order}rd`;
    } else {
        order = `${prophet.order}st`;
    }

  // Change the textContent property of the h2 element to contain the prophet's full name
    h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
    birthday.textContent = `Birthdate: ${prophet.birthdate}`;
    birthplace.textContent=`Birthplace: ${prophet.birthplace}`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} ${order} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(birthday);
    card.appendChild(birthplace);
    card.appendChild(portrait);

  // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
}
    
    
