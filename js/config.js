const APP_DEV = true;
let JSON_BASE_URL;
let API_BASE_URL;

if (APP_DEV) {
  JSON_BASE_URL = "http://localhost:3000";
  API_BASE_URL = "http://localhost/pbl/api-coba";
} else {
  JSON_BASE_URL = "http://localhost:3000";
  API_BASE_URL = "http://localhost";
}

export {JSON_BASE_URL, API_BASE_URL};
