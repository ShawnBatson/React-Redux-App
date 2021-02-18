import {
  FETCHING_SPELLS_SUCCESS,
  FETCHING_SPELLS_START
} from "../actions/Action";

const initialState = {
  spells: [],
  isFetching: true
};

export const SpellReducer = (state = initialState, action) => {
  console.log("this is in the top of the SpellReducer");
  switch (action.type) {
    case FETCHING_SPELLS_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCHING_SPELLS_SUCCESS:
      return {
        ...state,
        spells: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
