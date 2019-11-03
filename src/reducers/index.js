import { SET_WINNERS } from '../actions/index.js';

const initialState = {
  winners: [],
  settings: {}
};

const setWinners = (state, action) => {
  const newState = {...state};
  newState.winners = action.winners;
  return newState;
}

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WINNERS:
      return setWinners(state, action);
    default:
      return state
  }
}

export default globalReducer
