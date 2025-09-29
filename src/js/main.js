import { getParkData, getParkInfoLinks } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

const parkData = getParkData();
const parkInfoLinks = getParkInfoLinks();

function setParkIntro(data) {
  const intro = document.querySelector(".intro");
  intro.innerHTML = `<h1 class="intro__title">${data.fullName}</h1>
    <p class="intro__description">${data.description}</p>`;
}

setParkIntro(parkData);
mediaCardTemplate(parkInfoLinks);
setHeaderFooter(parkData);
