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
//Get the data of 'last-visit-date' from the local storage and store inside a variable called lastvisit
const lastvisit = Number(window.localStorage.getItem('last-visit-date'));
//Initialize a variable to get the id element from the DOM
const visitsDisplay = document.querySelector("#visits");

//Set a condition to calculate the number of days between the last visit and the actual date:
//If the condition is true
//Display the value of the number of days
if (lastvisit > 0) {
    const today = Date.now();
    let factor = 86400000;
    let daysBetween = Math.floor(Math.abs(today - lastvisit) / factor);
    visitsDisplay.textContent = `${daysBetween.toFixed(0)}`;
    
    
}  else {  
    
    visitsDisplay.textContent = 'This is your first visit! Welcome!';

}
// store the new number of visits value
localStorage.setItem("last-visit-date", today);









