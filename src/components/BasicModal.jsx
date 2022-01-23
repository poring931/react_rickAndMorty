import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>See more</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="character_about">
            <div className="character_about-img">
                <img src={props.character.image} alt="" />
            </div>
            <div className="character_about-episodes">

            </div>
        </Box>
      </Modal>
    </div>
  );
}