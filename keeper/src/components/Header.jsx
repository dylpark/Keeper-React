import React from "react";
import CreateIcon from "@mui/icons-material/Create";

function Header() {
  const header = "Keeper";

  return (
    <header>
      <h1>
        <CreateIcon color="white" />
        {header}
      </h1>
    </header>
  );
}

export default Header;
