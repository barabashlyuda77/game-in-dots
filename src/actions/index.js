export const SET_WINNERS = 'SET_WINNERS';

const setWinners = (winners) => {
  return {
    type: SET_WINNERS,
    winners
  }
}

export const getWinners = () => {
  return (dispatch) => {
    fetch('http://starnavi-frontend-test-task.herokuapp.com/winners')
    .then((response) => response.json())
    .then((winners) => dispatch(setWinners(winners)))
  }
}
