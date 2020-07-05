// import { combineReducers } from "redux";
import { REQUEST_CAPSULES, RECEIVE_CAPSULES } from "./actions";

export function capsules(
  state = {
    isFetching: false,
    capsules,
  },
  action
) {
  switch (action.type) {
    case REQUEST_CAPSULES:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_CAPSULES:
      return Object.assign({}, state, {
        isFetching: false,
        capsules: action.capsules,
      });
    default:
      return state;
  }
}
// {
//     capsule_serial:
//     capsule_id:
//     status:
//     original_launch:
//     original_launch_unix:
//     missions:
//     landings:
//     type:
//     details:
//     reuse_count:

// }

// export function landingPad(state = [], action) {
//   switch (action.type) {
//     case UPDATE_LANDING_PADS:
//       return Object.assign({}, state, {
//         landingPads: [...state.landingPad],
//       });
//   }
// }

// const spaceApp = combineReducers({
//   capsules,
//   landingPad,
// });

// export default spaceApp;
