import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

console.log(parkData);

// 1. update the link in the disclaimer area to read the name of the park and navigate to that park's offficial website
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;

disclaimer.innerHTML = parkData.fullName;

// 2. update the title of the page to read the name of the park
document.querySelector("head > title").textContent = parkData.fullName;

// 3 Use the first image in the list in the data for the hero image.
document.querySelector(".hero-banner > img").src = parkData.images[0].url;

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
