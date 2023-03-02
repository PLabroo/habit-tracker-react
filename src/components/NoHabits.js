// component used just to display when no habits are added

import React from "react";

export const NoHabits = () => {
  return (
    <>
      <h3 style={{ color: "grey", fontFamily: "cursive" }}>
        ComeOn! Please Add Some Habits
      </h3>
      <img
        style={{
          height: "20rem",
          width: "50vw",
          marginTop: "3rem",
          borderRadius: "5px",
          border: "4px solid grey",
        }}
        src="https://i.pinimg.com/originals/5e/92/67/5e9267643c84f6b91463b6e335617288.jpg"
        alt=""
      />
    </>
  );
};
