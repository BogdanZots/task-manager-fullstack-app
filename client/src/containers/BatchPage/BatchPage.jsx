import React, { useEffect } from "react";
import { Box } from "@mui/material";
import s from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { loadBatchItemsRequest } from "../../store/actions/batchActions";
import { getUser } from "../../store/selectors/userSelector";
const BatchPageContainer = s(Box)`
display: "flex",
flex-direction: "column",
margin-top: "92px",
width: "100%",
`;

export default function BatchPage() {
  const dispatch = useDispatch();
  const data = useSelector(getUser);
  useEffect(() => {
    console.log("data");
    dispatch(loadBatchItemsReques(data.id));
  }, []);
  return <BatchPageContainer>BatchPage</BatchPageContainer>;
}
