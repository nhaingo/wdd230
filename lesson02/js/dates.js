const currentDate = new Date();
document.querySelector("#year").textContent = currentDate.getFullYear();
const lastmod = document.querySelector("#lastModifiedDate");
lastmod.textContent = document.lastModified;