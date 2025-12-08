import spritePath from "../images/sprite.symbol.svg";

// this template is the description of the park
export function setParkIntro(data) {
  const intro = document.querySelector(".intro");
  intro.innerHTML = `<h1 class="intro__title">${data.fullName}</h1>
    <p class="intro__description">${data.description}</p>`;
}

// This template is the one that shows the cards with links to other pages
export function mediaCardTemplate(info) {
  const infoMap = info
    .map(
      (item) => `
        <div class="media-card">
        <a href="${item.link}">
        <img src="${item.image}"alt="${item.name}" class="media-card__img" />
        <h3 class="media-card__title">${item.name}</h3>
        </a>
        <p>${item.description}</p>
    </div>
    `
    )
    .join("");

  const infoSelector = document.querySelector(".info");
  infoSelector.innerHTML = infoMap;
  return infoSelector;
}


//  Here are the templates for the conditions page alerts and visitor centers

export function alertTemplate(alert) {
  let alertType = "";
  // most of the alerts are one word and line up with the icons nicely. "Park Closure" is the exception
  switch (alert.category) {
    case "Park Closure":
      alertType = "closure";
      break;
    default:
      alertType = alert.category.toLowerCase();
  }
  const date = alert.lastIndexedDate;
  const dateOnly = date.split(" ")[0];
  return `<li class="alert">
  <svg class="icon" focusable="false" aria-hidden="true">
    <use xlink:href="${spritePath}#alert-${alertType}"></use>
  </svg>
  <div>
    <h3 class="alert-${alertType}">${alert.title}</h3>
    <h5>Date: ${dateOnly}</h5>
    <p>${alert.description}</p>
  </div></li>`;
}


export function visitorCenterTemplate(center) {
  // const hours = center.operatingHours[0].standardHours.friday; This will be used to project hour depending the day

  return `<li class="visitor-center">
<h4><a href="visitor-center.html?id=${center.id}">${center.name}</a></h4>
  <h3>${center.name}</h3>
  <p>${center.description}</p>
  <p>${center.directionsInfo}</p> `;
}

export function activityTemplate(activity) {
  return `<li class="activity-item">
  <p>${activity.name}</p>
  </li>`;
}
export function iconTemplate(iconId) {
  return `<svg class="icon" role="presentation" focusable="false">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/images/sprite.symbol.svg#${iconId}"
            ></use>
          </svg>`;
}

export function vcDetailsTemplate(elementId, summaryText, iconId, content) {
  return `<details name="vc-details" id="${elementId}">
          <summary>
            ${iconTemplate(iconId)}
            ${summaryText}
          </summary>
          ${content}
        </details>`;
}

export function vcTitleTemplate(text) {
  return `${iconTemplate("ranger-station")} ${text}`;
}

export function vcInfoTemplate(data) {
  const image = data.images[0];
  return `<figure>
          <img src="${image.url}" alt="${image.altText}" />
          <figcaption>${image.caption} <span>${image.credit}</span></figcaption>
        </figure>
        <p>${data.description}</p>`;
}
export function listTemplate(data, contentTemplate) {
  const html = data.map(contentTemplate);
  return `<ul>${html.join("")}</ul>`;
}

function vcAddressTemplate(data) {
  return `<section>
            <h3>${data.type} Address</h3>
            <address>
              ${data.line1}<br />
              ${data.city}, ${data.stateCode} ${data.postalCode}
            </address>
          </section>`;
}

export function vcAddressesListTemplate(data) {
  const physical = data.find((address) => address.type === "Physical");
  const mailing = data.find((address) => address.type === "Mailing");
  let html = vcAddressTemplate(physical);
  if (mailing) {
    html += vcAddressTemplate(mailing);
  }
  return html;
}
export function vcAmenityTemplate(data) {
  return `<li>${data}</li>`;
}
export function vcDirectionsTemplate(data) {
  return `<p>${data}</p>`;
}
export function vcContactsTemplate(data) {
  return `<section class="vc-contact__email">
            <h3>Email Address</h3>
            <a href="email:${data.emailAddresses[0].emailAddress}">Send this visitor center an email</a>
          </section>
          <section class="vc-contact__phone">
            <h3>Phone numbers</h3>
            <a href="tel:+1${data.phoneNumbers[0].phoneNumber}">${data.phoneNumbers[0].phoneNumber}</a>
          </section>`;
}

export function vcImageTemplate(data) {
  return `<li><img src="${data.url}" alt="${data.altText}" ><li>`;
}

