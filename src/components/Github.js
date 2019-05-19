import React from "react";

const GitHub = () => {
  const avatarStyle = {
    position: "absolute",
    right: "10px",
    top: "10px",
    width: "48px"
  };
  return (
    <a
      href="https://github.com/vikbert/meiri"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="avatar"
        style={avatarStyle}
        src="https://github.githubassets.com/images/modules/site/logos/desktop-logo.png"
        alt="avatar"
      />
    </a>
  );
};

export default GitHub;
