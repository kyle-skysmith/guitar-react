import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavBarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/Home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/Free" activeStyle>
                        Free
                    </NavLink>
                    <NavLink to="/Lessons" activeStyle>
                        Lessons
                    </NavLink>

                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;