import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
        </div>
        <a className="btn btn-ghost text-3xl">Trimly</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/services">services</Link>
          </li>
          <li>
            <Link to="/contact" >contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-4">
        <Link to="/bookvisit" className="btn btn-neutral">
          Book a Visit
        </Link>
      </div>
    </div>
  );
};

export default NavBar;