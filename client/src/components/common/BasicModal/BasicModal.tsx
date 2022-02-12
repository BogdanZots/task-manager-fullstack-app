import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputItem from "../Input/InputItem";
import { useState } from "react";
import BasicForm from "../BasicForm/BasicForm";
import { CREATE_ITEM_FORM } from "../../../const/consts";
import s from "styled-components";

const Container = s.div`
display : inline
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface IBasicModalProps {
  type: string;
}

export default function BasicModal({ type }: IBasicModalProps) {
  const [open, setOpen] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleInputTitle = (e: any) => {
    setInputTitle(e);
  };

  //@ts-ignore
  const renderModal = (type: string): JSX.Element => {
    switch (type) {
      case "input-modal":
        return (
          <Box sx={style}>
            <BasicForm type={CREATE_ITEM_FORM} />
          </Box>
        );
      case "text-modal":
        return (
          <Box sx={style}>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Text in a modal
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        );
      default:
        <div>There is no data to display</div>;
    }
  };

  return (
    <Container>
      <Button onClick={handleOpen}>Create Item</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        {renderModal(type)}
      </Modal>
    </Container>
  );
}
