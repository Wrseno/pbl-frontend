const APP_DEV = true;
let JSON_BASE_URL;
let API_BASE_URL;

if (APP_DEV) {
  API_BASE_URL = "http://localhost/pbl/api-coba";
  JSON_BASE_URL = "http://localhost:3000";
} else {
  API_BASE_URL = "https://polivent.my.id/api";
  JSON_BASE_URL = "http://localhost:3000";
}

export {JSON_BASE_URL, API_BASE_URL};
