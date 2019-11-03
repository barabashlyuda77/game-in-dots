import { SET_WINNERS, SET_SETTINGS } from '../actions/index.js';

const initialState = {
  winners: [],
  settings: {}
};

const setWinners = (state, action) => {
  const newState = {...state};
  newState.winners = action.winners;
  return newState;
}

const setSettings = (state, action) => {
  const newState = {...state};
  newState.settings = action.settings;
  return newState;
}

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WINNERS:
      return setWinners(state, action);
    case SET_SETTINGS:
      return setSettings(state, action);
    default:
      return state
  }
}

export default globalReducer
