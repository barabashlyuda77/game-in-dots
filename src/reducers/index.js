import {
  SET_WINNERS,
  SET_SETTINGS,
  SAVE_MODE,
  SAVE_USER_NAME,
  HIGHLIGHT_RANDOM_SQUARE,
  CHANGE_SQUARE_STATUS_TO_USER,
  START_GAME
} from '../actions/index.js';
import { range } from '../helpers/index.js';

const initialState = {
  isGameStarted: false,
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
  const field = range(numberOfSquares);
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

const chooseRandomSquareId = (field) => {
  const emptySquares = field.filter((square) => square.status === 'empty');
  const numberElementInArray = Math.floor(Math.random() * emptySquares.length);
  return emptySquares[numberElementInArray].id;
}

const highlightRandomSquare = (state, action) => {
  const newState = {
    ...state,
    field: [...state.field]
  };

  const randomSquareId = chooseRandomSquareId(newState.field);
  newState.field = newState.field.map((square) => {
    if (square.id === randomSquareId ) {
      square.status = 'pending';
    }
    return square;
  })
  return newState;
}

const changeSquareStatusToUser = (state, action) => {
  const newState = {
    ...state,
    field: [...state.field]
  };
  newState.field = newState.field.map((square) => {
    if (square.id === action.id ) {
      square.status = 'user';
    }
    return square;
  })

  return newState;
}

const startGame = (state, action) => {
  const newState = {...state};
  newState.isGameStarted = true;
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
    case HIGHLIGHT_RANDOM_SQUARE:
      return highlightRandomSquare(state, action);
    case CHANGE_SQUARE_STATUS_TO_USER:
      return changeSquareStatusToUser(state, action);
    case START_GAME:
      return startGame(state, action);
    default:
      return state
  }
}

export default globalReducer
