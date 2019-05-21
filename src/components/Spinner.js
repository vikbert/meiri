import React from "react";

const Spinner = () => {
  const avatarStyle = {
    display: "block",
    marginRight: "auto",
    marginLeft: "auto"
  };
  return (
    <img
      style={avatarStyle}
      src="https://loading.io/spinners/flat-ring/index.flat-circle-spinner.svg"
      alt="loading ..."
    />
  );
};

export default Spinner;
