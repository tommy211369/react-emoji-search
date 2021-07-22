import React, { useState } from "react";

const Line = (props) => {
  const { emoji, title } = props;
  const [show, setShow] = useState(false);

  return (
    <div
      className="line"
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      <div>
        {emoji} {title}
      </div>
      <p className={show ? "visible" : "hidden"}>Click to copy !</p>
    </div>
  );
};

export default Line;
