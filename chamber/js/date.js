const currentDate = new Date();
document.querySelector("#year").textContent = currentDate.getFullYear();
document.querySelector("#year1").textContent = currentDate.getFullYear();
document.querySelector("#year2").textContent = currentDate.getFullYear();

const lastmod = document.querySelector("#lastModifiedDate");
const lastmod1 = document.querySelector("#lastModifiedDate1");
const lastmod2 = document.querySelector("#lastModifiedDate2");
lastmod.textContent = document.lastModified;
lastmod1.textContent = document.lastModified;
lastmod2.textContent = document.lastModified;

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(currentDate);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;