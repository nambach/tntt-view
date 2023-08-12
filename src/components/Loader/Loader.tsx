import {Backdrop, CircularProgress} from '@mui/material';
import {useState} from 'react';

export const useLoader = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const Loader = ({loading}: {loading?: boolean}) => (
  <div>
    <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={loading != null ? loading : open}
    onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  </div>
  );

  return {
    Loader, showLoader: () => setOpen(true), hideLoader: () => setOpen(false), toggle: handleToggle
  }
}
