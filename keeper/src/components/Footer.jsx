import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  const copyright = `Dylan Park © ${date}`;

  return (
    <footer>
      <p>{copyright}</p>
    </footer>
  );
}

export default Footer;
