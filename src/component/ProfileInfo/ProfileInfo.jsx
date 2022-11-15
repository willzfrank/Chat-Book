import React from "react";
import "./ProfileInfo.css";
import EditIcon from "@mui/icons-material/Edit";
import ProfileModal from "../ProfileModal/ProfileModal";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WorkIcon from "@mui/icons-material/Work";

const ProfileInfo = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="profileinfo--container">
      <ProfileModal open={open} close={handleClose} />
      <div className="edit--container">
        <h2>User Information</h2>
        <h2>Bio</h2>
        <EditIcon onClick={handleOpen} />
      </div>
      <div className="edit--container--content">
        <div className="bio--container">
          <h4>Intro</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            beatae neque assumenda quidem consequuntur nisi facilis magni dicta,
            sed ab incidunt dolor magnam sint dolore cupiditate fuga alias animi
            quas!
          </p>
        </div>
        <p className="user--details pt-1">
          <WorkIcon /> Director at Willy Wonka Technologies
        </p>
        <p className="user--details">
          <LocationOnIcon /> Lagos
        </p>
        <p className="user--details">
          <FavoriteIcon /> Complicated
        </p>
      </div>
      <button className="button logout--btn">Log Out</button>
    </div>
  );
};

export default ProfileInfo;
