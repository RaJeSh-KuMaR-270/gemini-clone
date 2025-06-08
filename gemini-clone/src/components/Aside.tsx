import React, { useState } from "react";
import { assets } from "../assets/assets";

const Aside: React.FC = () => {
  const [asideOpen, setAsideOpen] = useState(false);
  return (
    <aside className="sidebar">
      <div className="top">
        <img
          onClick={() => setAsideOpen((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {asideOpen && <p>New Chat</p>}
        </div>
        {asideOpen && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>Whats us react...</p>
            </div>
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {asideOpen && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {asideOpen && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {asideOpen && <p>Settings</p>}
        </div>
      </div>
    </aside>
  );
};

export default Aside;
