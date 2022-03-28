function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

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

/*number of days since last visits*/
//Get the data of 'visit-ls' from the local storage and store inside a variable called lastvisit
const lastvisit = Number(window.localStorage.getItem('visits-ls'));
//Initialize a variable to get the id element from the DOM
const displayNumberOfDay = document.querySelector("#visits");
const today = Date.now();

//Set a condition to calculate the number of days between the last visit and the actual date:
//If the condition is true
//Display the value of the number of days
if (lastvisit > 0) {
    let daysBetween = Math.floor((Math.abs(today - lastvisit) /1000)/ 86400);
    displayNumberOfDay.textContent = `${daysBetween}`;
    
    
}  else {  
    
    displayNumberOfDay.textContent = 'This is your first visit! Welcome!';

}
// store the new number of visits value
localStorage.setItem('visits-ls', today);

// function for a pop up window on contact page
function myFunction() {
    alert("Thank you! We have received your request. We will get back to you as soon as possible");
  }







