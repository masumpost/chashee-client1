// import React from "react";

import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const lis = (
    <>
      <li>
        <Link to="/member">Member</Link>
      </li>
      <li>
        <Link to="/ml">ML</Link>
      </li>
      <li>
        <Link to="/wl">WL</Link>
      </li>
      <li>
        <Link to="/fdr">FDR</Link>
      </li>
      <li>
        <Link to="/dps">DPS</Link>
      </li>
      <li>
        <Link to="/wc">WC</Link>
      </li>
      <li>
        <Link to="/income">Income</Link>
      </li>
      <li>
        <Link to="/expense">Expense</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-blue-700 text-neutral-content">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2"><Link to="/">Account</Link></div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {lis}
              </ul>
            </div>
          </div>
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            {lis}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
