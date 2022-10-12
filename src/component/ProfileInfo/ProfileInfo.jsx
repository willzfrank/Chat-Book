import React from 'react';
import './ProfileInfo.css';
import EditIcon from '@mui/icons-material/Edit';
import ProfileModal from '../ProfileModal/ProfileModal';

const ProfileInfo = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="profileinfo--container">
      <ProfileModal open={open} close={handleClose} />
      <div className="edit--container">
        <h2>User Information</h2>
        <EditIcon onClick={handleOpen} />
      </div>
      <div className="edit--container--content">
        <p className="user--details">
          <span>City:</span> Lagos
        </p>
        <p className="user--details">
          <span>Relationship:</span> Complicated
        </p>
        <p className="user--details">
          <span>Work:</span> Complicated
        </p>
      </div>
      <button className="button logout--btn">Log Out</button>
    </div>
  );
};

export default ProfileInfo;
