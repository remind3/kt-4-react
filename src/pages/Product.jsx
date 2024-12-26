import { useEffect, useState } from "react";
import styles from "./App.module.css";
import React from 'react';
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { useParams } from "react-router-dom";
import { Stars } from "../components/stars/Stars";
import { useNavigate } from "react-router-dom";

export function Product() {
  const [data, setData] = useState(null);
  const [loarding, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const api = `https://fakestoreapi.com/products/${id}`;
    async function getData() {
      const res = await fetch(api);
      const data = await res.json();
      setData(data);
      setLoading(false);
    }
    getData();
  }, []);

  if (loarding) {
    return <p>Загрузка...</p>;
  }

  return (
    <>
      <Header />
      {data && (
        <div className={styles.card}>
          <img className={styles.img} src={data.image} />
          <p className={styles.text}>{data.title}</p>
          <p className={styles.text}> Прайс {data.price} </p>
          <Stars rate={data.rating.rate} />
        </div>
      )}
      <button
        onClick={() => {
          navigate("/React-route/products");
        }}
      >
        НАЗАД
      </button>
      <Footer />
    </>
  );
}
