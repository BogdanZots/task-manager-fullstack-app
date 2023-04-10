import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Reminds from "../../components/RemindsPage";
import { useSelector, useDispatch } from "react-redux";
import { loadRemindsRequest } from "../../store/actions/remindsAction";
import { getUser, getUserId } from "../../store/selectors/userSelector";
import { getReminds } from "../../store/selectors/remindsSelector";
import { removeRemindCard } from "../../store/actions/remindsAction";

export default function RemindsPage() {
  const dispatch = useDispatch();
  const reminds = useSelector(getReminds);
  const {
    data: { id },
  } = useSelector(getUser);

  const onRemove = (id: string) => {
    dispatch(removeRemindCard(id));
  };

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
      }}
    >
      <Reminds remindsArray={reminds} onRemove={onRemove} />
    </Box>
  );
}
