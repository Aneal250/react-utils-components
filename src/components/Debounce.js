import React from "react";

const Debounce = () => {
  //Debounce function
  const myDebounce = (cb, d) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, d);
    };
  };

  //Debounce Implementation
  const handleChange = myDebounce((e) => {
    console.log(e.target.value);
  }, 1000);

  return (
    <div>
      Debounce
      <input onChange={handleChange} />
    </div>
  );
};

export default Debounce;
