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
/*number of visits*/
/*const visitsCount = document.querySelector("#visits");

// get the stored value in localStorage
let visits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (visits !== 0) {
	visitsCount.textContent = visits;
} else {
	visitsCount.textContent = `This is your first visit!`;
}

// increment the number of visits.
visits++;
// store the new number of visits value
localStorage.setItem("visits-ls", visits);*/





