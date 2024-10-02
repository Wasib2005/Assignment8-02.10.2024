import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="fixed w-full z-20">
        <div>
          <div className="navbar  bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <NavLink
                      to={"/"}
                      className={({ isActive }) =>
                        isActive ? " text-success border-2 border-success " : ""
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/listed_books"}
                      className={({ isActive }) =>
                        isActive ? " text-success border-2 border-success " : ""
                      }
                    >
                      Listed Books
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/pages_to_read"}
                      className={({ isActive }) =>
                        isActive ? " text-success border-2 border-success " : ""
                      }
                    >
                      Pages to Read
                    </NavLink>
                  </li>
                </ul>
              </div>
              <Link to={"/"} className="btn btn-ghost text-2xl">
                Book Archive
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? " text-success border-2 border-success " : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/listed_books"}
                    className={({ isActive }) =>
                      isActive ? " text-success border-2 border-success " : ""
                    }
                  >
                    Listed Books
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/pages_to_read"}
                    className={({ isActive }) =>
                      isActive ? " text-success border-2 border-success " : ""
                    }
                  >
                    Pages to Read
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="navbar-end flex gap-2">
              <NavLink to={"/Login"}>
                <button className="btn btn-success">Sing In</button>
              </NavLink>
              <NavLink to={"/Sing_up"}>
                <button className="btn btn-primary">Sing Up</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  );
};

export default Nav;
