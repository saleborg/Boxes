import { handleResponse, handleError } from "./apiUtils";
const baseUrlBox = "http://localhost:3030/BoxRest/rest/boxes/";

export function getBoxes() {
  return fetch(baseUrlBox)
    .then(handleResponse)

    .catch(handleError);
}

export function saveBox(box) {
  return fetch(baseUrlBox, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(box),
  })
    .then(handleResponse)
    .catch(handleError);
}
