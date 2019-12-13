import axios from 'axios';

export const FETCH_QUOTE_START = 'FETCH_QUOTE_START';
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';
export const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE';
// async action creator
export const getQuote = () => dispatch => {
  dispatch({ type: FETCH_QUOTE_START });
  axios
    .get('https://official-joke-api.appspot.com/jokes/programming/random')
    .then(res => {
        console.log(res.data);
      dispatch({ type: FETCH_QUOTE_SUCCESS, payload: res.data[0] });
    })
    .catch(err => {
      dispatch({ type: FETCH_QUOTE_FAILURE, payload: err.response });
    });
};

// const getQuote = () => {
//   return dispatch => {
//     dispatch({ type: 'FETCH_QUOTE_START' });
//   };
// };