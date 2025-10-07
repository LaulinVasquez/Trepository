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

  const info1 = document.querySelector(".info");
  info1.innerHTML = infoMap;
  return info1;
}
