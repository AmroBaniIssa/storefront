import React from "react";
import { Navbar, Alignment, Button } from "@blueprintjs/core";
// import { SettingsContext } from '../Context/Site';
// import { ThemeContext } from "../../Context/theme";
// import { Link } from "react-router-dom";
export default function Header(props) {
  // const myContext = useContext(ThemeContext);

  return (
    // className={myContext.mode}
    <Navbar >
      {/* <Navbar.Group align={Alignment.LEFT}> */}
        {/* <Link to="/">Home</Link> */}
        <Navbar.Divider />
        <Navbar.Heading>welcom to Jordainian Amazon</Navbar.Heading>
      {/* </Navbar.Group> */}
    </Navbar>
  );
}
