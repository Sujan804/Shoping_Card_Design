import React from "react";
import { useSelector } from "react-redux";
import ProductForm from "./ProductForm";
const Body = () => {
  const products = useSelector((state) => state.product);

  return (
    <main className="py-16">
      <div className="productWrapper">
        <div className="productContainer" id="lws-productContainer">
          {products.length === 0 ? (
            <h1 className="formTitle">No product Available</h1>
          ) : (
            products.map((product) => (
              <div className="lws-productCard" key={product.id}>
                <img
                  className="lws-productImage"
                  // src="https://i.dummyjson.com/data/products/59/thumbnail.jpg"
                  src={product.imageUrl}
                  alt="product"
                />
                <div className="p-4 space-y-2">
                  <h4 className="lws-productName">{product.productName}</h4>
                  <p className="lws-productCategory">{product.category}</p>
                  <div className="flex items-center justify-between pb-2">
                    <p className="productPrice">
                      BDT <span className="lws-price">{product.price}</span>
                    </p>
                    <p className="productQuantity">
                      QTY{" "}
                      <span className="lws-quantity">{product.quantity}</span>
                    </p>
                  </div>
                  <button className="lws-btnAddToCart">Add To Cart</button>
                </div>
              </div>
            ))
          )}

          {/* <div className="lws-productCard">
            <img
              className="lws-productImage"
              src="https://i.dummyjson.com/data/products/40/thumbnail.jpg"
              alt="product"
            />
            <div className="p-4 space-y-2">
              <h4 className="lws-productName">Women Winter Clothes</h4>
              <p className="lws-productCategory">Tops</p>
              <div className="flex items-center justify-between pb-2">
                <p className="productPrice">
                  BDT <span className="lws-price">100</span>
                </p>
                <p className="productQuantity">
                  QTY <span className="lws-quantity">30</span>
                </p>
              </div>
              <button className="lws-btnAddToCart">Add To Cart</button>
            </div>
          </div> */}
        </div>
        <ProductForm />
      </div>
    </main>
  );
};

export default Body;
