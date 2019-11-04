import { SET_WINNERS, SET_SETTINGS, SAVE_MODE } from '../actions/index.js';

const initialState = {
  winners: [],
  settings: {},
  activeMode: null
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

const saveMode = (state, action) => {
  const newState = {...state};
  newState.activeMode = action.mode;
  return newState;
}

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WINNERS:
      return setWinners(state, action);
    case SET_SETTINGS:
      return setSettings(state, action);
    case SAVE_MODE:
      return saveMode(state, action);
    default:
      return state
  }
}

export default globalReducer
