import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './ProfileModalStyles.css';
import React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  width: '55%',
  bgcolor: 'var(--white)',
  border: '2px solid var(--main)',
  boxShadow: 24,
  borderRadius: '5px',
  p: 4,
};

const ProfileModal = ({ close, open }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="profile-edit"
        aria-describedby="profile-edit-button"
      >
        <Box sx={style} className="modal--box">
          <Typography
            id="profile-edit"
            variant="h6"
            component="h2"
            style={{ textAlign: 'center', fontSize: '30px' }}
          >
            Your Information
          </Typography>
          <form action="" className="form--information">
            <div>
              <input
                type="text"
                name="Username"
                id=""
                placeholder="Username"
                className="login--input"
              />

              <input
                type="text"
                name="City"
                id=""
                placeholder="Lives in"
                className="login--input"
              />

              <input
                type="text"
                name="Work"
                id=""
                placeholder="Works at"
                className="login--input"
              />

              <input
                type="text"
                name="Relationship"
                id=""
                placeholder="Relationship Status"
                className="login--input"
              />
            </div>
            <div className="image--container">
              <div className="image--box">
                Profile Image
                <input type="file" name="profileImg" />
              </div>
              <div className="image--box">
                Cover Image
                <input type="file" name="coverImg" />
              </div>
            </div>
            <input
              type="submit"
              value="update"
              className="button update--btn"
            />
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ProfileModal;
