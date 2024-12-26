import React from "react";
import { useState, useEffect } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../components/cartItem/CartItem";
import { addProduct } from "../store/cartSlice";

export function Cart() {
  const [value, setValue] = useState("");
  const [products, setProducts] = useState([]);
  const cartProducts = useSelector((store) => store.cart.cartProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    setProducts(cartProducts);
  }, [cartProducts]);

  return (
    <div className="container">
      <div className="container-form">
        <input
          className="container-input"
          placeholder="Имя нового продукта....."
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="container-btn"
          onClick={() =>
            dispatch(
              addProduct({
                title: value,
                count: 1,
                id: cartProducts.length + 1,
              })
            )
          }
        >
          Добавить
        </button>
      </div>
      <div className="container-items">
        {products.map((el) => {
          return <CartItem data={el} />;
        })}
      </div>
    </div>
  );
}
