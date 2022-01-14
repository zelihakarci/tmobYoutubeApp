import * as actionTypes from '../actions/actionTypes';
const regionReducer = (
  state = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  },
  action,
) => {
  let newState;
  switch (action.type) {
    case actionTypes.SET_REGION:
      return (newState = action.payload);
    default:
      return state;
  }
};
export default regionReducer;
