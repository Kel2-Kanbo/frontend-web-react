import React from "react";
import { NavLink } from "react-router-dom";

import { IoAppsSharp } from "react-icons/io5";

const Sidebar = () => {
  return (
    <>

      <input type="checkbox" id="sidebar-toggle" />
      <div className="sidebar">
        <div className="sidebar-header">
          <h3 className="brand">
            <span className="brand-title">Kanbo</span>
          </h3>
          <label htmlFor="sidebar-toggle"><IoAppsSharp/></label>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "side-link active" : "side-link"
                }
              >
                <i className=""></i>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kelola-wisata"
                className={({ isActive }) =>
                  isActive ? "side-link active" : "side-link"
                }
              >
                <i className="fa-solid fa-map-location-dot"></i>

                <span>My Task</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kelola-berita"
                className={({ isActive }) =>
                  isActive ? "side-link active" : "side-link"
                }
              >
                <i className="fa-regular fa-newspaper"></i>
                <span>My Project</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kelola-admin"
                className={({ isActive }) =>
                  isActive ? "side-link active" : "side-link"
                }
              >
                <i className="fa-solid fa-user-pen"></i>
                <span>Kelola Admin</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;