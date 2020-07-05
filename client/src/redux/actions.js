import axios from "axios";

export const REQUEST_CAPSULES = "REQUEST_CAPSULES";
function requestCapsules() {
  return {
    type: REQUEST_CAPSULES,
  };
}

export const RECEIVE_CAPSULES = "RECEIVE_CAPSULES";
function receiveCapsules(json) {
  return {
    type: REQUEST_CAPSULES,
    capsules: json.data.children.map((child) => child.data),
  };
}

export const REQUEST_LANDING_PAD = "REQUEST_LANDING_PAD";
function requestLandingPad(landingPadId) {
  return {
    type: REQUEST_LANDING_PAD,
    landingPadId,
  };
}

export function getCapsules() {
  return function (dispatch) {
    dispatch(requestCapsules());
    console.log("I got here");

    return axios
      .get("http://localhost:4000/api/v1/capsule")
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then((json) => dispatch(receiveCapsules(json)));
  };
}
