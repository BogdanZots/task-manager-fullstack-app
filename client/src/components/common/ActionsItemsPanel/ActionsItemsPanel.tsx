import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import BasicModal from "../../common/BasicModal/BasicModal";
import SearchBasic from "../SearchBasic/Search";
import { useDispatch } from "react-redux";
import { setRemindsItemRequest } from "../../../store/actions/remindsAction";
import { addItemForm } from "../../../configs/formsConfigs";

export default function ActionsItemsPanel() {
  const dispatch = useDispatch();

  const onButtonClick = (data: any) => {
    dispatch(setRemindsItemRequest({ ...data }));
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <BasicModal
        //@ts-ignore
        getColumnsData={onButtonClick}
        type="input-modal"
        inputColumns={addItemForm}
      />
      <SearchBasic />
    </Box>
  );
}
