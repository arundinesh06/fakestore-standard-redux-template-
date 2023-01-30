import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    console.log("About to fetch products");
    const response = await axios
      .get("https://api.escuelajs.co/api/v1/products")
      .catch((error) => {
        console.log(error);
      });
    console.log(response.data);
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Products:", products);
  return (
    <div className="ui grid container" style={{ paddingTop: "100px" }}>
      {products.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
};

export default ProductListing;
