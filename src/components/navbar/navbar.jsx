import React from "react";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Container>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <NavLink className="btn py-2 mt-2 btn-ghost normal-case text-xl">E.N.M</NavLink>
            </div>

            <div class="flex-none gap-2">
                <ul class="menu menu-horizontal p-0 ml-2 hidden lg:contents">
                    <li class="ml-2"><NavLink >HOME</NavLink></li>
                    <li class="ml-2"><NavLink >ABOUT</NavLink></li>
                    <li class="ml-2" ><NavLink >PROJECTS</NavLink></li>
                    <li class="ml-2" ><NavLink >SKILLS</NavLink></li> 
                    <li class="ml-2" ><NavLink >CONTACT</NavLink></li> 
                </ul>
                <div class="dropdown dropdown-end ">
                    <label tabindex={0} class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabindex={0} class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box  w-52">
                        <li class="ml-2"><NavLink >HOME</NavLink></li>
                        <li class="ml-2"><NavLink >ABOUT</NavLink></li>
                        <li class="ml-2" ><NavLink >PROJECTS</NavLink></li>
                        <li class="ml-2" ><NavLink >SKILLS</NavLink></li> 
                        <li class="ml-2" ><NavLink >CONTACT</NavLink></li> 
                    </ul>
                </div>
            </div>
        </div>
    </Container>
  );
}

export default NavBar;