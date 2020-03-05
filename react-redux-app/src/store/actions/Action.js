import axios from "axios";

export const FETCHING_SPELLS_START = "FETCHING_SPELLS_START";
export const FETCHING_SPELLS_SUCCESS = "FETCHING_SPELLS_SUCCESS";
export const FETCHING_SPELLS_FAILURE = "FETCHING_SPELLS_FAILURE";

export const getSpell = () => dispatch => {
  dispatch({ type: FETCHING_SPELLS_START });
  console.log(dispatch);

  axios
    .get(`http://dnd5eapi.co/api/spells/`)
    .then(res => {
      let dataDump = res;
      console.log("res", dataDump);
      dispatch({ type: FETCHING_SPELLS_SUCCESS, payload: dataDump.data });
    })
    .catch(err => {
      console.log("err", err);
      dispatch({
        type: FETCHING_SPELLS_FAILURE,
        payload: `${err.response.message} with response code ${err.response.code}`
      });
    });
};
