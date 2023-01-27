import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRemindsItemRequest } from "../../../store/actions/remindsAction";
import { getUser } from "../../../store/selectors/userSelector";
import { CREATE_FORM, INPUT_MODAL } from "../../../const/const";
import BasicForm from "../Forms/FormLayout";
import { Box, Button, Typography, Modal } from "@mui/material";
import s from "styled-components";

const Container = s.div`
display : inline
`;
const StyledButton = s(Button)`
background-color : #0000006b;
padding:10px;
color:black;
margin:10px;
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

interface IModalLayoutProps {
  type: string;
  getColumnsData: any;
  inputColumns: any;
}

export default function ModalLayout({ type }: IModalLayoutProps) {
  const [visible, setVisible] = useState(false);
  const handleOpen = () => setVisible(true);
  const handleClose = () => setVisible(false);
  const {
    data: { id },
  } = useSelector(getUser);
  const dispatch = useDispatch();
  const handleFormSubmit = (data: any) => {
    dispatch(setRemindsItemRequest({ ...data, id }));
    handleClose();
  };

  const renderModal = (type: string): JSX.Element => {
    switch (type) {
      case INPUT_MODAL:
        return (
          <Box sx={style}>
            <BasicForm
              //@ts-ignore
              isVisible={visible}
              onClose={handleClose}
              type={CREATE_FORM}
              userId={id}
              onSubmit={handleFormSubmit}
            />
          </Box>
        );
      case "text-modal":
        return (
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        );
      default:
        return <div>There is no data to display</div>;
    }
  };

  return (
    <Container>
      <StyledButton onClick={handleOpen}>Create Item</StyledButton>
      <Modal
        open={visible}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {renderModal(type)}
      </Modal>
    </Container>
  );
}
