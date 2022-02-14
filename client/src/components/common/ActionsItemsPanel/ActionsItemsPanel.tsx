import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import BasicModal from "../../common/BasicModal/BasicModal";
import SearchBasic from "../SearchBasic/Search";
export default function ActionsItemsPanel() {
  const handleButtonClick = () => {};
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <BasicModal type='input-modal' />
      <SearchBasic />
    </Box>
  );
}
