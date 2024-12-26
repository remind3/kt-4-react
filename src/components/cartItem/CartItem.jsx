import "./CartItem.css";
import { decrement, increment } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

export const CartItem = ({ data }) => {
  const { id, title, count } = data;
  const dispatch = useDispatch();

  return (
    <div className="container-item">
      <p className="container-item-title">{title}</p>
      <div className="quantity-section">
        <button
          className="quantity-btn"
          onClick={() => dispatch(decrement({ id: id }))}
        >
          -
        </button>
        <div className="quantity-value-wrapper">
          <span className="quantity-value">{count}</span>
        </div>
        <button
          className="quantity-btn"
          onClick={() => dispatch(increment({ id: id }))}
        >
          +
        </button>
      </div>
    </div>
  );
};
