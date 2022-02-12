import React from "react";
import { Box } from "@mui/material";
import Reminds from "../../components/RemindsPage";
import { useSelector, useDispatch } from "react-redux";
interface IRemindsContainerProps {}
export default function RemindsPage({}: IRemindsContainerProps) {
  const dispatch = useDispatch();
  //@ts-ignore
  const { remindsArray } = useSelector((store) => store.reminds);
  return (
    <Box sx={{ display: "inline" }}>
      <Reminds remindsArray={remindsArray} dispatch={dispatch} />
    </Box>
  );
}
