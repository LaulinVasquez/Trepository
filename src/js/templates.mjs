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
  <h3>${center.name}</h3>
  <p>${center.description}</p>
  <p>${center.directionsInfo}</p> `;
}

export function activityTemplate(activity) {
  return `<li class="activity-item">
  <p>${activity.name}</p>
  </li>`;
}