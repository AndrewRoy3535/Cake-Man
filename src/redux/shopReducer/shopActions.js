import { shoptypes } from "./shopTypes";
import sanityClient from "../../client";

const fetchData = (data) => {
  return {
    type: shoptypes.FETCH_DATA,
    payload: data,
  };
};

export const fetchDataInt = () => {
  return (dispatch) => {
    sanityClient
      .fetch(
        `*[_type == 'product']{
          "id":_id,
          title,
          slug,
          "productImages": defaultProductVariant.images[].asset->url,
          "price": defaultProductVariant.price,
        }`
      )
      .then((response) => dispatch(fetchData(response)))
      .catch(console.error);
  };
};
