import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Reminds from "../../components/RemindsPage";
import { useSelector, useDispatch } from "react-redux";
import { loadRemindsRequest } from "../../store/actions/remindsAction";

export default function RemindsPage() {
  const dispatch = useDispatch();
  const { reminds } = useSelector((store) => store);
  const { id } = useSelector((store) => store.user.data);
  console.log("ID", id);
  useEffect(() => {
    dispatch(loadRemindsRequest(id));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "92px",
        width: "100%",
      }}>
      <Reminds remindsArray={reminds} dispatch={dispatch} />
    </Box>
  );
}
