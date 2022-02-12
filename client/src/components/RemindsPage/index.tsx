import { useEffect } from "react";
import { IReminds } from "../../models/IReminds";
import { loadRemindsRequest } from "../../store/actions/remindsAction";
import ActionsItemsPanel from "../common/ActionsItemsPanel/ActionsItemsPanel";
import DefaultItemsLayout from "../common/DefaultItemsLayout/DefaultItemsLayout";
import { Box } from "@mui/material";
import s from "styled-components";

const Title = s.div`
display : inline
`;
interface IRemindsProps {
  remindsArray: IReminds[];
  dispatch: any;
}

export default function Reminds(props: IRemindsProps) {
  const { remindsArray, dispatch } = props;
  useEffect(() => {
    dispatch(loadRemindsRequest());
  }, []);
  return (
    <Box sx={{ display: "inline" }}>
      <Title>Reminds Component</Title>
      <ActionsItemsPanel />
      <DefaultItemsLayout items={remindsArray} />
    </Box>
  );
}
