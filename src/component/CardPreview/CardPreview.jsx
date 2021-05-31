import React, { useEffect } from "react";
import { fetchDataInt } from "../../redux/shopReducer/shopActions";
import { connect } from "react-redux";
import Spinner from "../../component/Spinner/Spinner";
import Card from "../Card/Card";
import { selectProducts } from "../../redux/shopReducer/shopSelector";

function CardPreview({ fetchData, loading, products }) {
  useEffect(() => {
    fetchData();

    return () => {
      fetchData();
    };
  }, [fetchData]);

  if (loading)
    return (
      <div className='mt-24 flex justify-center'>
        <Spinner />
      </div>
    );

  return (
    <>
      <h1 className='w-full flex justify-center text-4xl mt-5'>OUR CAKES</h1>
      <div className='bg-white sm:flex sm:flex-col md:flex md:flex-row flex-wrap w-full  justify-center items-center'>
        {products.map((el) => (
          <Card key={el.id} item={el} />
        ))}
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  products: selectProducts(state),
  loading: state.shop.loading,
});

const mapDispathchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchDataInt()),
});

export default connect(mapStateToProps, mapDispathchToProps)(CardPreview);
