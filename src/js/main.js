import { getParkData, getParkInfoLinks, getMailingAddress, getVoicePhone } from "./parkService.mjs";

const parkData = getParkData();
const parkInfoLinks = getParkInfoLinks();

function setHeaderInfo(data) {
  // insert data into disclaimer section
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;
  // update the title of the site. Notice that we can select things in the head just like in the body with querySelector
  document.querySelector("head > title").textContent = data.fullName;
  // set the banner image
  document.querySelector(".hero-banner > img").src = data.images[0].url;
  // use the template function above to set the rest of the park specific info in the header
  document.querySelector(".hero-banner__content").innerHTML =
    parkInfoTemplate(data);
}

// 4. Update the name, designation, and states of the park in the hero.
function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}

const smallBanner = document.querySelector(".hero-banner__content");
smallBanner.innerHTML = parkInfoTemplate(parkData);


function setParkIntro(data) {
  const intro = document.querySelector(".intro");
  intro.innerHTML = `<h1 class="intro__title">${data.fullName}</h1>
    <p class="intro__description">${data.description}</p>`;
}


function mediaCardTemplate(info) {
  const infoMap = info
    .map(
      (item) => `
      <img
    src="${item.image}"
    alt="${item.name}"
    class="media-card__img"
  />
  <h2 class="media-card__caption">${item.name}</h2>
  <p>${item.description}</p>
  `
    ).join("");

  const info1 = document.querySelector(".info");
  info1.innerHTML = infoMap;
  return info1;
}

function footerTemplate(info) {
  const mailing = getMailingAddress(info.addresses);
  const phone = getVoicePhone(info.contacts.phoneNumbers);
  
  const footer = document.querySelector("#park-footer");
  footer.innerHTML = `
  <section class= contact>
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <p>${mailing.line1}</p>
    <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
    <h4>Phone:</h4>
    <p>${phone}</p>
  </section>  
  `
}



setHeaderInfo(parkData);
setParkIntro(parkData);
mediaCardTemplate(parkInfoLinks);
footerTemplate(parkData);