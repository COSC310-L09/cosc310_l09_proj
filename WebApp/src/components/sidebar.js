import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom"
import { BiHome, BiGroup, BiUser, BiRightArrowAlt} from "react-icons/bi"
import { BsBoxSeam, BsTruck, BsClipboard, BsGear, BsArrowRightShort } from "react-icons/bs"
import { FiDatabase } from "react-icons/fi"
import { BsCameraVideo } from "react-icons/bs"
import "../scss/sidebar.scss"
import "../scss/main.scss"

import SidebarItem from "./sidebarItem.js";
import DBStorage from "./dbstorage.js"
import LiveFeed from "./liveFeed.js"

export default function Sidebar() {
    const strokeWidth = "0.025rem"

    const [open, setOpen] = useState(false)

    const toggleSidebar = e => {
      setOpen(prev => !prev)
    }

    return (
        <div className="container full">
            <aside className={`sidebar ${open ? "open" : ""}`}>
              <div className="top">
                <BiHome className="logo" color="var(--off-white)"/>
              </div>
              <div className="mid">
                <ul className="list">
                  <SidebarItem 
                    dest={"/"}
                    icon={<BsCameraVideo className="icon icon-size-1" color="var(--off-white)" strokeWidth={strokeWidth}/>}
                    title={"Live Camera Feed"}
                  />
                  <SidebarItem 
                    dest={"/storage"}
                    icon={<FiDatabase className="icon icon-size-1" color="var(--off-white)"/>}
                    title={"Database Storage"}
                  />
                </ul>
              </div>
              <div className="bot">
                <ul className="list">
                  <li className="list-item" onClick={toggleSidebar}>
                    <div className="tool-tip">Expand</div>
                    <div className="link-container">
                      <BiRightArrowAlt className="icon icon-size-1 rotate-180" color="var(--off-white)" strokeWidth={strokeWidth}/>
                      <div className="hidden text-1 off-white ml-1 medium">Collapse</div>
                    </div>
                  </li>
                  {/* <SidebarItem 
                    dest={"/settings"}
                    icon={<BsGear className="icon icon-size-1" color="var(--off-white)" strokeWidth={strokeWidth}/>}
                    title={"Settings"}
                  />
                  <SidebarItem 
                    dest={"/user"}
                    icon={<BiUser className="icon icon-size-1" color="var(--off-white)" strokeWidth={strokeWidth}/>}
                    title={"User Profile"}
                  /> */}
                </ul>
              </div>
            </aside>
            <div className="container bg">
              <Routes>
                <Route path={"/"} element={<LiveFeed/>}/>
                <Route path={"/storage"} element={<DBStorage/>}/>
              </Routes>
            </div>
        </div>
    )
}