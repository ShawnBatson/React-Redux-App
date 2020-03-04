import {
  FETCHING_SPELLS_SUCCESS,
  FETCHING_SPELLS_FAILURE
} from "../actions/Action";

const initialState = {
  _id: "",
  index: "",
  name: "",
  desc: [],
  higher_level: [],
  page: "",
  range: " ",
  components: [],
  material: "",
  ritual: false,
  duration: "",
  concentration: false,
  casting_time: "",
  level: 0,
  school: {
    name: "",
    url: ""
  }
};

export const SpellReducer = (state = initialState, action) => {
  console.log(initialState);
  switch (action.type) {
    default:
      return state;
  }
};
