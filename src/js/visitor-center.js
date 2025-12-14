import "../css/style.css"; 
import "../css/visitor-center.css"
import { setHeaderFooter2 } from "./setHeaderFooter.mjs";
import { getParkData, getParkVisitorCenterDetails } from "./parkService.mjs";
import {
  vcInfoTemplate,
  vcTitleTemplate,
  vcDetailsTemplate,
  vcAmenityTemplate,
  vcImageTemplate,
  listTemplate,
  vcAddressesListTemplate,
  vcDirectionsTemplate,
  vcContactsTemplate
} from "./templates.mjs";

function getParam(param) {
  const search = location.search;
  const params = new URLSearchParams(search);
  return params.get(param);
}

function buildPage(data) {
 
  document.querySelector(".vc-name").innerHTML = vcTitleTemplate(data.name);
  document.querySelector(".vc-info").innerHTML = vcInfoTemplate(data);
  const detailsEl = document.querySelector(".vc-details-list");
  detailsEl.innerHTML = "";

  const addressHTML = vcAddressesListTemplate(data.addresses);
  detailsEl.insertAdjacentHTML(
    "beforeend",
    vcDetailsTemplate(
      "vcAddresses",
      "Addresses",
      "heading-icon_map-pin",
      addressHTML
    )
  );
  
  detailsEl.insertAdjacentHTML(
    "beforeend",
    vcDetailsTemplate(
      "vcDirections",
      "Directions",
      "directions",
      vcDirectionsTemplate(data.directionsInfo)
    )
  );

  const amenitiesHTML = listTemplate(data.amenities, vcAmenityTemplate);
  detailsEl.insertAdjacentHTML(
    "beforeend",
    vcDetailsTemplate(
      "vcAmenities",
      "Amenities",
      "heading-icon_info",
      amenitiesHTML
    )
  );
  // contact section
  const contactHTML = vcContactsTemplate(data.contacts);
  detailsEl.insertAdjacentHTML(
    "beforeend",
    vcDetailsTemplate("vcContacts", "Contacts", "phone", contactHTML)
  );
  // gallery section
  const galleryHTML = listTemplate(data.images, vcImageTemplate);
  document
    .querySelector(".vc-gallery")
    .insertAdjacentHTML("beforeend", galleryHTML);
}

async function init() {
  const parkData = await getParkData();
  const id = getParam("id");
  const centerDetails = await getParkVisitorCenterDetails(id);
  setHeaderFooter2(parkData);
  buildPage(centerDetails);
}

export function iconTemplate(iconId) {
  return `<svg class="icon" role="presentation" focusable="false">
  <use
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xlink:href="/images/sprite.symbol.svg#${iconId}"
  ></use>
  </svg>`;
}

init();