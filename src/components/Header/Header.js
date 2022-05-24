import React from "react";
import "./Header.css";

const Header = () => {
  console.log('Header running');
  return (
    <header>
      <h3>useCallback</h3>
    </header>
  );
};

export default React.memo(Header);
