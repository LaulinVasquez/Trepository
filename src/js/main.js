import "../css/style.css";
import "../css/home.css";

import { getParkData, getInfoLinks} from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { mediaCardTemplate, setParkIntro } from "./templates.mjs";





async function init() {
  const parkData = await getParkData();
  setHeaderFooter(parkData);
  setParkIntro(parkData);
  mediaCardTemplate(getInfoLinks(parkData.images));

}

init();
