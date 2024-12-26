import { useEffect, useState } from "react";
import React from 'react';
import styles from "./App.module.css";
import ServiceItem from "../components/serviceItem/ServiceItem";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

export function Products() {
  const [data, setData] = useState([]);
  const [loarding, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const api = "https://fakestoreapi.com/products";
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
      <div className={styles.container}>
        {data.map((el) => {
          return (
            <ServiceItem
              text={el.title}
              prise={el.price}
              key={el.id}
              id={el.id}
              image={el.image}
              rating={el.rating.rate}
              setData={setData}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}
