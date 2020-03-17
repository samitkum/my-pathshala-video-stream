import React from "react";

import Toolbar from "@material-ui/core/Toolbar";
import { MyAppBar, MyLink, MyTypography } from "./header.styles";

const Header = () => {
  return (
    <div style={{ flexGrow: "1" }}>
      <MyAppBar position="static">
        <Toolbar>
          <MyTypography variant="h6" style={{ flexGrow: "1" }}>
            <MyLink to="/">My Pathshala</MyLink>
          </MyTypography>
          <MyLink to="/">Home</MyLink>
          <MyLink to="/about">About</MyLink>
        </Toolbar>
      </MyAppBar>
    </div>
  );
};

export default Header;
