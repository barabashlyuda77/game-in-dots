import {
  SET_WINNERS,
  SET_SETTINGS,
  SAVE_MODE,
  SAVE_USER_NAME
} from '../actions/index.js';
import { range } from '../helpers/index.js';

const initialState = {
  winners: [],
  settings: {},
  activeMode: null,
  user: {
    name: null,
    points: 0
  },
  computer: {
    name: 'Computer',
    points: 0
  },
  field: []
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

  const numberOfSquares = Math.pow(state.settings[action.mode].field, 2);
  console.log(state.settings[action.mode]);
  const field = range(numberOfSquares);
  console.log('field--', field);
  newState.field = field.map((_, i) => {
    return { id: i, status: 'empty' }
  });

  return newState;
}

const saveUserName = (state, action) => {
  const newState = {...state};
  newState.user.name = action.name;
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
    case SAVE_USER_NAME:
      return saveUserName(state, action);
    default:
      return state
  }
}

export default globalReducer
