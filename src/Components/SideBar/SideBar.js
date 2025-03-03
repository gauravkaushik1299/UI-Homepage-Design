import React, { useState } from "react";
import "./SideBar.css";

const Sidebar = () => {
  // Define menu items with labels and icons
  const menuItems = [
    {
      id: 1,
      label: "Home",
      icon: (
        <img
          src={require("../../Assets/SideBar/home/home@2x.jpg")}
          style={{ width: "16px", height: "16.86px" }}
          alt="Home Icon"
        />
      ),
    },
    {
      id: 2,
      label: "Notifications",
      icon: (
        <img
          src={require("../../Assets/SideBar/notification/notification@2x.jpg")}
          style={{ width: "15px", height: "17.65px" }}
          alt="Notifications Icon"
        />
      ),
    },
    {
      id: 3,
      label: "Shop",
      icon: (
        <img
          src={require("../../Assets/SideBar/heart/heart@2x.jpg")}
          style={{ width: "15.52px", height: "13.77px" }}
          alt="Shop Icon"
        />
      ),
    },
    {
      id: 4,
      label: "Conversation",
      icon: (
        <img
          src={require("../../Assets/SideBar/message/message@2x.jpg")}
          style={{ width: "17.78px", height: "16px" }}
          alt="Conversation Icon"
        />
      ),
    },
    {
      id: 5,
      label: "Wallet",
      icon: (
        <img
          src={require("../../Assets/SideBar/message (1)/message@2x.jpg")}
          style={{ width: "17.78px", height: "15px" }}
          alt="Wallet Icon"
        />
      ),
    },
    {
      id: 6,
      label: "Subscription",
      icon: (
        <img
          src={require("../../Assets/SideBar/favorite/favorite@2x.jpg")}
          style={{ width: "18.06px", height: "18.06px" }}
          alt="Subscription Icon"
        />
      ),
    },
    {
      id: 7,
      label: "My Profile",
      icon: (
        <img
          src={require("../../Assets/SideBar/profile/profile@2x.jpg")}
          style={{ width: "12.8px", height: "16px" }}
          alt="My Profile Icon"
        />
      ),
    },
    {
      id: 8,
      label: "Settings",
      icon: (
        <img
          src={require("../../Assets/SideBar/setting/setting@2x.jpg")}
          style={{ width: "14.81px", height: "16px" }}
          alt="Settings Icon"
        />
      ),
    },
  ];

  // State to manage the active menu item
  const [activeItem, setActiveItem] = useState(1);
  // State to manage the visibility of the logout popup
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  // Handle menu item click
  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  // Handle logout action
  const handleLogout = () => {
    setShowLogoutPopup(true);
    setTimeout(() => {
      setShowLogoutPopup(false);
    }, 2000); // hide popup after 2 seconds
  };

  return (
    <aside className="sidebar">
      {/* Navigation menu */}
      <nav className="menu">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={activeItem === item.id ? "active" : ""}
              onClick={() => handleItemClick(item.id)}
            >
              <span className="icon-placeholder">{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout button */}
      <div className="logout" onClick={handleLogout}>
        <span className="icon-placeholder">
          <img
            src={require("../../Assets/SideBar/logout/logout@2x.jpg")}
            style={{ width: "18.89px", height: "14.5px" }}
            alt="Logout Icon"
          />
        </span>{" "}
        Log out
      </div>

      {/* Logout popup */}
      {showLogoutPopup && (
        <div className="logout-popup">
          <div className="popup-content">You have been logged out</div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
