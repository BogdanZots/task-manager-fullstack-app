import ActionsItemsPanel from "../common/ActionsItemsPanel/ActionsItemsPanel";
import DefaultItemsLayout from "../common/DefaultItemsLayout/DefaultItemsLayout";
import { Box } from "@mui/material";
import s from "styled-components";
import { IRemind } from "../../models/reminds/IReminds";

const Title = s.div`
display : block;
font-size : 32px;
font-weight:bold;
`;
const RemindsContainer = s(Box)`
display: flex;
 flex-direction: column;
 width: 100%;
`;
const RemindsActionPanelContainer = s(Box)`
display: flex;
align-items: center;
`;

interface IRemindsProps {
  remindsArray: IRemind[];
  onRemove: (id: string) => void;
}

export default function Reminds(props: IRemindsProps) {
  const { remindsArray, onRemove } = props;
  return (
    <RemindsContainer>
      <Title>Reminds Component</Title>
      <RemindsActionPanelContainer>
        <ActionsItemsPanel />
      </RemindsActionPanelContainer>
      <DefaultItemsLayout onRemove={onRemove} items={remindsArray} />
    </RemindsContainer>
  );
}
