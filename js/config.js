const APP_DEV = true;
let API_BASE_URL;

APP_DEV
  ? (API_BASE_URL = "http://localhost/pbl/rest-api-polyvent")
  : (API_BASE_URL = "https://polivent.my.id/api");

export {API_BASE_URL};
