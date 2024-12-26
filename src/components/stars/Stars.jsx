import React from "react";

export const Stars = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <span
        className={`fa fa-star ${Math.floor(props.rate) >= 1 && "active"}`}
      ></span>{" "}
      <span
        className={`fa fa-star ${Math.floor(props.rate) >= 2 && "active"}`}
      ></span>{" "}
      <span
        className={`fa fa-star ${Math.floor(props.rate) >= 3 && "active"}`}
      ></span>{" "}
      <span
        className={`fa fa-star ${Math.floor(props.rate) >= 4 && "active"}`}
      ></span>{" "}
      <span
        className={`fa fa-star ${Math.floor(props.rate) >= 5 && "active"}`}
      ></span>
    </div>
  );
};
