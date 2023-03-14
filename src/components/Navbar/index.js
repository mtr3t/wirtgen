
import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
import "./style.css"
  
const Navbar = () => {
  return (
    <>
    <div className="Navs">
      <Nav>
        <NavMenu>
          <NavLink to="/Forms" activeStyle>
          <h1 className="tile">Forms</h1>
          </NavLink>
          <NavLink to="/Assignments" activeStyle>
          <h1 className="tile">Assignments</h1>
          </NavLink>
          <NavLink to="/Info" activeStyle>
          <h1 className="tile">Info</h1>
          </NavLink>
          <NavLink to="/Search" activeStyle>
          <h1 className="tile">Files</h1>
          </NavLink>
          <NavLink to="/Hamm" activeStyle>
          <h1 className="tile">Hamm</h1>
          </NavLink>
          <NavLink to="/Voegele" activeStyle>
          <h1 className="tile">Voegele</h1>
          </NavLink>
          <NavLink to="/Wirtgen" activeStyle>
          <h1 className="tile">Wirtgen</h1>
          </NavLink>
          <NavLink to="/Kleemann" activeStyle>
          <h1 className="tile">Kleemann</h1>
          </NavLink>
        </NavMenu>
      </Nav>
      </div>
    </>
  );
};
  
export default Navbar;