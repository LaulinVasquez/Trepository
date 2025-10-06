import { getParkData, getParkInfoLinks, getInfoLinks } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

const parkData = await getParkData();
const parkInfoLinks = getParkInfoLinks();
getInfoLinks(parkData.images);


function setParkIntro(data) {
  const intro = document.querySelector(".intro");
  intro.innerHTML = `<h1 class="intro__title">${data.fullName}</h1>
    <p class="intro__description">${data.description}</p>`;
}

console.log(parkData);
async function init() {
  setHeaderFooter(parkData);
  setParkIntro(parkData);
  mediaCardTemplate(parkInfoLinks);
}

init();
