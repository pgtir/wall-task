import React from "react";
import Profile from "./Content/Profile";
import SocialMedia from "./Content/SocialMedia";
import Community from "./Content/Community";
import PercentChips from "./Content/PercentChips";
import SubscribeButton from "./Content/SubscribeButton";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Profile />
      <SocialMedia />
      <section className="description">
        An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and owner
        of 📦 @nftboxes
      </section>
      <Community/>
      <PercentChips/>
      <SubscribeButton/>
    </div>
  );
};

export default Sidebar;
