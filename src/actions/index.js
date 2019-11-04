export const SET_WINNERS = 'SET_WINNERS';
export const SET_SETTINGS = 'SET_SETTINGS';
export const SAVE_MODE = 'SAVE_MODE';
export const SAVE_USER_NAME = 'SAVE_USER_NAME';
export const HIGHLIGHT_RANDOM_SQUARE = 'HIGHLIGHT_RANDOM_SQUARE';

const setWinners = (winners) => {
  return {
    type: SET_WINNERS,
    winners
  }
}

const setSettings = (settings) => {
  return {
    type: SET_SETTINGS,
    settings
  }
}

export const saveMode = (mode) => {
  return {
    type: SAVE_MODE,
    mode
  }
}

export const saveUserName = (name) => {
  return {
    type: SAVE_USER_NAME,
    name
  }
}

export const highlightRandomSquare = () => {
  return {
    type: HIGHLIGHT_RANDOM_SQUARE
  }
}

export const getWinners = () => {
  return (dispatch) => {
    fetch('http://starnavi-frontend-test-task.herokuapp.com/winners')
    .then((response) => response.json())
    .then((winners) => dispatch(setWinners(winners)))
  }
}

export const getSettings = () => {
  return (dispatch) => {
    fetch('http://starnavi-frontend-test-task.herokuapp.com/game-settings')
    .then((response) => response.json())
    .then((settings) => dispatch(setSettings(settings)))
  }
}
