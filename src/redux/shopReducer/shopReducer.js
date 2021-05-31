import { shoptypes } from "./shopTypes";

const INITIAL_STATE = {
  loading: true,
  products: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shoptypes.FETCH_DATA:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
