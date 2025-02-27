import React, { useContext } from "react";
import logo from "./../../assets/images/logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/AuthContext";
import { cartcontext } from "../../Context/CartContext";

function Navbar() {
  const { token, settoken } = useContext(authContext);
  const { noOfItems } = useContext(cartcontext);
  const nav = useNavigate();

  function signout() {
    localStorage.removeItem("token");
    settoken(null);
    nav("/login");
  }

  return (
    <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl w-[90%] flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <img src={logo} className="h-8" alt="Logo" />
        </Link>

        <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
          <div className="flex space-x-2">
            {!token ? (
              <>
                <NavLink to="/register" className="py-1 px-3 text-black">
                  Register
                </NavLink>
                <NavLink to="/login" className="py-1 px-3 text-black">
                  Login
                </NavLink>
              </>
            ) : (
              <button onClick={signout} className="py-1 px-3 text-black">
                Sign Out
              </button>
            )}
          </div>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
          id="navbar-sticky"
        >
          {token ? (
            <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg lg:space-x-4 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0">
              <li>
                <NavLink to="/" className="px-3 py-1 text-gray-900 rounded-sm">
                  Home
                </NavLink>
              </li>
              <li className="relative">
                <NavLink
                  to="cart"
                  className="px-3 py-1 text-gray-900 rounded-sm"
                >
                  Cart
                </NavLink>
                {noOfItems > 0 && (
                  <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-black bg-red-500 rounded-full -top-2 -right-2">
                    {noOfItems}
                  </div>
                )}
              </li>
              <li>
                <NavLink
                  to="wishlist"
                  className="px-3 py-1 text-gray-900 rounded-sm"
                >
                  Wishlist
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="categories"
                  className="px-3 py-1 text-gray-900 rounded-sm"
                >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="brands"
                  className="px-3 py-1 text-gray-900 rounded-sm"
                >
                  Brands
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="allorders"
                  className="px-3 py-1 text-gray-900 rounded-sm"
                >
                  Orders
                </NavLink>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
