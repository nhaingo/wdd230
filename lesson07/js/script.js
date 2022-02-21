//get all images with data-src attribute
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
    }, imgOptions);
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