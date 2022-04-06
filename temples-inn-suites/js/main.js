function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;
/*weather*/
/*let temperature =parseFloat(document.querySelector('#temperature').innerHTML);
let windSpeed = parseFloat(document.querySelector('#speed').innerHTML);*/
/*weather */
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Durban&units=metric&appid=d921f126e62ef280771adf266dfddd5a";
fetch(apiURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject); 
        const weatherTemp = jsonObject.main.temp;
        let currentTemp = document.querySelector('#current-temp');
        let windSpeed = jsonObject.wind.speed;
        let currentSpeed = document.querySelector('#speed');
        let humidity = document.querySelector('#humidity');
        let currentHumidity = jsonObject.main.humidity;

        currentTemp.textContent = weatherTemp.toFixed(1);
        currentSpeed.textContent = windSpeed;
        humidity.textContent = currentHumidity;

        const iconsrc= `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;
        const desc = jsonObject.weather[0].description;
        
        
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;


});
/*lazy loading*/
const images = document.querySelectorAll('img[data-src]');

//optional parameters being set for the IntersectionalObserver
const imgOptions = {
    rootMargin: '0px 0px 50px 0px',
    threshold: 1,
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

//first check to see if Intersection Observer is supportted
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);

            }
        });
    });
    //loop through each img and check status and load if necessary
    images.forEach((img) => {
        imgObserver.observe(img);
    });
} 
else {
    //just load ALL images if not supported
    images.forEach((img) => {
        loadImages(img);
    });
}
/*year footer*/
const currentDate = new Date();
document.querySelector("#year").textContent = currentDate.getFullYear();

/*temple cards*/
//store the resource, the URL of the JSON file into a const variable to start.
const requestURL = './data/data.json';
const cards = document.querySelector('#temple-cards');

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
         //store the results of the converted response into an array since the data source is a neatly packed array of records named "temples"
        const temples = jsonObject['temples'];
        //loop through every record and process each one into its own 'card' (HTML output), one at a time.
        //using a forEach method (Links to an external site.), define a function named "displayTemples" which will be called for each temple record in the temples list.
        temples.forEach(displayTemples);
    });

   

//define a function named displayTemples()  that take one parameter "temple" and receive each elements of the temples array.
function displayTemples(temple) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let lot = document.createElement ('p');
    let street = document.createElement ('p');
    let city = document.createElement ('p');
    let phone = document.createElement ('p');
    let announce = document.createElement('p');
    let groundbreaking = document.createElement('p');
    let dedication = document.createElement('p');
    let clothing = document.createElement ('p');
    let housing = document.createElement ('p');
    let center = document.createElement ('p');
    let cafeteria = document.createElement ('p');
    let image = document.createElement ('img');
    let linebreak = document.createElement('hr');
    let address=document.createElement('p');
    let milestone=document.createElement('p');
    let services=document.createElement('p');
    let schedule=document.createElement('p');
    let closure=document.createElement('p');
    let styleTitle = document.createAttribute('style');
    let styleTitle1 = document.createAttribute('style');
    let styleTitle2 = document.createAttribute('style');
    let styleTitle3 = document.createAttribute('style');
    
    
// Change the textContent property 
    h2.innerHTML = `${temple.name}`;
    address.textContent = `Address:`;
    lot.textContent =`${temple.lot}`;
    street.textContent =`${temple.street}`;
    city.textContent =`${temple.city}`;
    phone.textContent=`Contact: ${temple.phone}`;
    milestone.textContent=`Milestones: `;
    announce.textContent=`${temple.announce}`;
    groundbreaking.textContent=`${temple.groundbreaking}`
    dedication.textContent=`${temple.dedication}`;
    services.textContent = `Services: `;
    clothing.textContent =`${temple.clothing}`;
    housing.textContent = `${temple.housing}`;
    center.textContent = `${temple.center}`;
    cafeteria.textContent = `${temple.cafeteria}`;
    linebreak.textContent =`${linebreak}`;
    schedule.textContent = `Temple Schedule:`
    closure.textContent = `${temple.schedule}`
// Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values..
    image.setAttribute('src', temple.imageurl);
    image.setAttribute('alt', `Picture of ${temple.name}`);
    image.setAttribute('loading', 'lazy');
//Build a special CSS rule for specific lines
    styleTitle.value = "font-family:'Lato', sans-serif;font-weight:bold;font-size: 18px";
    styleTitle1.value = "font-family:'Lato', sans-serif;font-weight:bold;font-size: 18px";
    styleTitle2.value = "font-family:'Lato', sans-serif;font-weight:bold;font-size: 18px";
    styleTitle3.value = "font-family:'Lato', sans-serif;font-weight:bold;font-size: 18px";
    


// Add/append the section(card)
    card.appendChild(image);  
    card.appendChild(h2);
    card.appendChild(address);
    address.setAttributeNode(styleTitle);
    card.appendChild(lot);
    card.appendChild(street);
    card.appendChild(city);
    card.appendChild(phone);
    card.appendChild(milestone);
    milestone.setAttributeNode(styleTitle1);
    card.appendChild(announce);
    card.appendChild(groundbreaking);
    card.appendChild(dedication);
    card.appendChild(services);
    services.setAttributeNode(styleTitle2);
    card.appendChild(clothing);
    card.appendChild(housing);
    card.appendChild(cafeteria);
    card.appendChild(center);
    card.appendChild(schedule)
    schedule.setAttributeNode(styleTitle3);
    card.appendChild(closure);

    

// Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
}
/*footer last modification date*/
const lastmod = document.querySelector("#lastModifiedDate");
lastmod.textContent = document.lastModified;
    
