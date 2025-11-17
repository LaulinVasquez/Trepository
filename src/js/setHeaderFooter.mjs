import { getMailingAddress, getVoicePhone } from "./parkService.mjs";
import enableNavigation from "./navigation.mjs";

export function setHeaderFooter(data) {
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
    enableNavigation();

  // set the footer info
  const mailing = getMailingAddress(data.addresses);
  const phone = getVoicePhone(data.contacts.phoneNumbers);
  const footer = document.querySelector("#park-footer");
  footer.innerHTML = `
    <section class= contact>
      <h3 class="park-footer">Contact Info</h3>
      <h4 class="park-footer">Mailing Address:</h4>
      <p>${mailing.line1}</p>
      <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
      <h4>Phone:</h4>
      <p>${phone}</p>
    </section>  
    `;
}


// Template for info in the header picture
function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
      <p class="hero-banner__subtitle">
          <span>${info.designation}</span>
          <span>${info.states}</span>
      </p>`;
}
