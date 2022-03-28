const requestURL = "./data/data.json";

const randlist = (number) => {
  //A function that creates and returns a list that contains 3 random numbers

  let newlist = [];

  while (newlist.length < 3) {
    num = Math.trunc(Math.random() * number);
    !newlist.includes(num) && newlist.push(num);
  }

  return newlist;
};
function spotlight(directory) {
  //A function that creates and returns 3 business items

  let spotlightBusinesses = [];

  for (let i = 0; i < directory.length; i++) {
    const spotcard = directory[i];
    spotcard["membership"] === "gold" || spotcard["membership"] === "silver"
      ? spotlightBusinesses.push(spotcard)
      : {};
  }

  // pick a gold or silver member at random
  let spotList = randlist(spotlightBusinesses.length);

  const spot1 = spotlightBusinesses[spotList[0]];
  const spot2= spotlightBusinesses[spotList[1]];
  const spot3 = spotlightBusinesses[spotList[2]];

  return `<div class="spotlight1">
          <h4>${spot1.company}</h4>
          <img src="${spot1.imageurl}" alt="${spot1.company}" loading="lazy"/>
          <p class="spot-email">${spot1.email}</p>
          <p class="spot-number">${spot1.phone}</p>
          <a href="${spot1.website}"  target="_blank">Website</a>
        </div>
        <div class="spotlight2">
          <h4>${spot2.company}</h4>
          <img src="${spot2.imageurl}" alt="${spot2.company}" loading="lazy"/>
          <p class="spot-email">${spot2.email}</p>
          <p class="spot-number">${spot2.phone}</p>
          <a href="${spot2.website}" target="_blank">Website</a>
        </div>
        <div class="spotlight3">
          <h4>${spot3.company}</h4>
          <img src="${spot3.imageurl}" alt="${spot3.company}" loading="lazy"/>
          <p class="spot-email">${spot3.email}</p>
          <p class="spot-number">${spot3.phone}</p>
          <a href="${spot3.website}"  target="_blank">Website</a>
        </div>`;
}

fetch(requestURL)
  .then((response) => {
    return response.ok ? response.json() : console.log("error");
  })
  .then((data) => {
    let businesses = data["directory"];
  

    const spot = spotlight(businesses);
  

    document.querySelector(".spotlights").innerHTML = spot;

  });