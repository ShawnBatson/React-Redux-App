import axios from "axios";

export const FETCHING_SPELLS_START = "FETCHING_SPELLS_START";
export const FETCHING_SPELLS_SUCCESS = "FETCHING_SPELLS_SUCCESS";
export const FETCHING_SPELLS_FAILURE = "FETCHING_SPELLS_FAILURE";

export const getSpells = () => dispatch => {
  dispatch({ type: FETCHING_SPELLS_START });
  console.log(dispatch);

  axios
    .get(`https://cors-anywhere.herokuapp.com/dnd5eapi.co/api/spells`)
    .then(res => {
      let dataDump = res.data.results;
      console.log("res", dataDump);
      dispatch({
        type: FETCHING_SPELLS_SUCCESS,
        payload: dataDump.data.spells
      });
    })
    .catch(err => {
      console.log("err", err);
      dispatch({
        type: FETCHING_SPELLS_FAILURE,
        payload: `${err} with response code ${err}`
      });
    });
};
