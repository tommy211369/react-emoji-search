import React from "react";

const Line = (props) => {
  const { emoji, title } = props;
  return (
    <div>
      {emoji} {title}
    </div>
  );
};

export default Line;
