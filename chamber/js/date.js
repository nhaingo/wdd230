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

datefield.innerHTML=`<em>${fulldate}</em>`
/*banner homepage*/
const banner= document.querySelector(".banner");
const options = { weekday: 'long'};
const bday = new Intl.DateTimeFormat('en-US', options).format(currentDate);
if (bday == "Monday" || bday == "Tuesday") {
    banner.innerHTML = `<em>${'🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'}</em>`;
    
}

// Set the value of the "date" field
var day = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();
var montharray=new Array("January","February","March","April","May","June","July","August","September","October","November","December");

// Set the date field to the current date
/*document.querySelector("#registerdate").value = day + " " +montharray[month]+ " " + year;*/

// Set the value of the "time" field
var hours = currentDate.getHours();
var mins = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

// Set the date field to the current time
document.querySelector("#registertime").value = hours + ":" + mins;
