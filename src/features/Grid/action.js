import { ADD_TILE, REMOVE_TILE } from "./constants";
const addTile = (color) => {
  return {
    type: ADD_TILE,
    created_at: Date.now(),
    color,
  };
};
const removeTile = (id) => {
  return {
    type: REMOVE_TILE,
    id,
  };
};

const addTileWithChecking = (color) => {
  return (dispatch, getState) => {
    //<- redux-thunk return action creator untuk dapat state skrg
    if (getState().grid.length < 5) {
      dispatch(addTile(color));
    }
  };
};

export { addTile, removeTile, addTileWithChecking };
