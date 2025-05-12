import React from "react";
import logo from "../../assets/img/onur.jpg";

const Profile = () => {
  return (
    <div className="profile-img">
      <img
        src={logo}
        alt="Onur Abdulaji Logo"
        className="img-fluid rounded-circle"
      />
    </div>
  );
};

export default Profile;
