import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom"

const SidebarItem = ({dest, icon, title} ) => {

    return (
      <li className="list-item">
        <div className="tool-tip">{title}</div>
        <NavLink className="link" 
          to={dest} 
          activeclassname="active"
        >
          <div className="link-container">
            {icon}
            <div className="hidden text-1 off-white ml-1 medium one-line">{title}</div>
          </div>
        </NavLink>
      </li>
    )
}

export default SidebarItem