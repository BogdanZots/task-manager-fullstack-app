import { useDispatch } from "react-redux";
import { setRemindsItemRequest } from "../../../store/actions/remindsAction";
import { addItemForm } from "../../../config/config";
import { INPUT_MODAL } from "../../../const/consts";
import SearchBasic from "../SearchBasic/Search";
import BasicModal from "../../common/BasicModal/BasicModal";
import { Box } from "@mui/material";

export default function ActionsItemsPanel() {
  const dispatch = useDispatch();

  const onButtonClick = (data: any) => {
    dispatch(setRemindsItemRequest({ ...data }));
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <BasicModal
        getColumnsData={onButtonClick}
        type={INPUT_MODAL}
        inputColumns={addItemForm}
      />
      <SearchBasic />
    </Box>
  );
}
