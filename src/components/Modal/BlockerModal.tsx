import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

interface BlockerModalProps {
  isShowModal: boolean;
}

export default function BlockerModal({ isShowModal }: BlockerModalProps) {
  const [open, setOpen] = useState(isShowModal);

  useEffect(() => {
    setOpen(isShowModal)
  }, [isShowModal])
  

  const handleClose = (
    event: {},
    reason: "backdropClick" | "escapeKeyDown"
  ) => {
    if (reason && reason === "backdropClick") return;
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Thông báo
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Hiện tại hệ thống đang được bảo trì.<br></br>
              Xin quý phụ huynh quay lại vào lúc <strong>6h sáng</strong>.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
