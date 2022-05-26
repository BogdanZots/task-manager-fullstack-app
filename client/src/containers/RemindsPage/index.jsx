import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Reminds from "../../components/RemindsPage";
import { useSelector, useDispatch } from "react-redux";
import { loadRemindsRequest } from "../../store/actions/remindsAction";
import { getUserId } from "../../store/selectors/userSelector";
import { getReminds } from "../../store/selectors/remindsSelector";

export default function RemindsPage() {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const reminds = useSelector(getReminds);
  const id = useSelector(getUserId);
  
=======
  const { reminds } = useSelector((store) => store);
  const { id } = useSelector((store) => store.user.data);
>>>>>>> develop
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
      <Reminds remindsArray={reminds} dispatch={dispatch} />
    </Box>
  );
}
