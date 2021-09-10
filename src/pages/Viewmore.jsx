import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectProducts } from "../redux/shopReducer/shopSelector";
import { fetchDataInt } from "../redux/shopReducer/shopActions";
import ViewProducts from "../component/ViewProducts/ViewProducts";

function Viewmore({ products, fetchData }) {
  useEffect(() => {
    fetchData();
    return () => {
      fetchData();
    };
  }, [fetchData]);

  return (
    <div>
      {products.map((el) => (
        <ViewProducts products={el} key={el.id} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  products: selectProducts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchDataInt()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Viewmore);
