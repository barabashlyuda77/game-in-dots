export const SET_WINNERS = 'SET_WINNERS';
export const SET_SETTINGS = 'SET_SETTINGS';


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
