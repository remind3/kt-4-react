import styles from "./styles.module.css";
import React from 'react';
import { Stars } from "../stars/Stars";
import { Link } from "react-router-dom";

function ServiceItem({ text, prise, id, image, rating, setData }) {
  return (
    <Link to={`/React-route/products/${id}`}>
      <div
        className={styles.card}
        onDoubleClick={() =>
          setData((prev) => {
            return prev.filter((el) => el.id !== id);
          })
        }
      >
        <img
          className={styles.img}
          src={Array.isArray(image) ? image[0] : image}
        />
        <p className={styles.text}>{text}</p>
        <p className={styles.text}> Прайс {prise} </p>
        <Stars rate={rating} />
      </div>
    </Link>
  );
}

export default ServiceItem;
