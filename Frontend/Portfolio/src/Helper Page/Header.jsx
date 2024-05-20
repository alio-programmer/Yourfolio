import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Header = () => {
  const user = localStorage.getItem("token");
  return (
    <div className=" w-[100vw] h-[10vh] fixed bg-slate-950 overflow-hidden child:text-white position-sticky">
      <nav className=" flex justify-center items-center text-xl z-10 child:m-3 child:p-2 child-hover:scale-110">
        <HashLink smooth to="/#home">
          Home
        </HashLink>
        <HashLink smooth to="/#projects">
          Projects
        </HashLink>
        <HashLink smooth to="/#techstack">
          Tech Stack
        </HashLink>
        <HashLink smooth to="/#coding">
          Coding
        </HashLink>
        <HashLink smooth to="/#contact">
          Contact Me
        </HashLink>
        {!user && <Link to="/login">Admin Login</Link>}
        {user && <Link to="/admin">Dashboard</Link>}
      </nav>
    </div>
  );
};

export default Header;
