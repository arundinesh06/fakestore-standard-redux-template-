import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../redux/actions/productActions";
import { removeSelectedProduct } from "../redux/actions/productActions";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.allProducts.product);
  const { title, price, category, image, description } = product;
  const { id } = useParams();
  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((error) => {
        console.log(error);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    fetchProductDetails();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [dispatch]);
  return (
    <div className="ui grid container" style={{ paddingTop: "50px" }}>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a href="" className="ui teal tag label">
                    ${price}
                  </a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
