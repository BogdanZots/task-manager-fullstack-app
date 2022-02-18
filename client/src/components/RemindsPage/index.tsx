import ActionsItemsPanel from "../common/ActionsItemsPanel/ActionsItemsPanel";
import DefaultItemsLayout from "../common/DefaultItemsLayout/DefaultItemsLayout";
import { Box } from "@mui/material";
import s from "styled-components";

const Title = s.div`
display : inline
`;
/* interface IRemindsProps {
  remindsArray: IReminds[];
  dispatch: any;
}
 */
export default function Reminds(props: any /* : IRemindsProps */) {
  const { remindsArray } = props;
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Title>Reminds Component</Title>
        <ActionsItemsPanel />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "100%",
        }}>
        <DefaultItemsLayout items={remindsArray.data} />
      </Box>
    </Box>
  );
}
