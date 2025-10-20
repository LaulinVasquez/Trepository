import "../css/style.css";
import "../css/conditions.css";
import {
  getParkData,
  getAlerts,
  getVisitorCenterData,
} from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import {
  alertTemplate,
  visitorCenterTemplate,
  activityTemplate,
} from "./templates.mjs";

function setAlerts(alerts) {
  const alertsContainer = document.querySelector(".alerts > ul");
  alertsContainer.innerHTML = "";
  const html = alerts.map(alertTemplate);
  alertsContainer.insertAdjacentHTML("beforeend", html.join(""));
}

function setVisitorCenters(centers) {
  const visitorContainer = document.querySelector(".visitorList");
  visitorContainer.innerHTML = "";
  const html = centers.map(visitorCenterTemplate);
  visitorContainer.insertAdjacentHTML("beforeend", html.join(""));
}

function setActivity(activities) {
  const activityContainer = document.querySelector(".activityList");
  activityContainer.innerHTML = "";
  const html = activities.map(activityTemplate);
  activityContainer.insertAdjacentHTML("beforeend", html.join(""));
}

async function init() {
  const parkData = await getParkData();
  const alertsData = await getAlerts(parkData.parkCode);
  const visitorCentersData = await getVisitorCenterData(parkData.parkCode);

  setHeaderFooter(parkData);
  setAlerts(alertsData);
  setVisitorCenters(visitorCentersData);
  setActivity(parkData.activities);
}

init();
