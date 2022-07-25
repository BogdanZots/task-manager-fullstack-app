import Box from "@mui/material/Box";
import DefaultCardLayot from "../DefaultCardLayout/DefaultCardLayout";

interface IDefaultItemsLayout {
  items: Array<any>;
}
export default function DefaultItemsLayout(props: IDefaultItemsLayout) {
  const { items } = props;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "100%",
      }}>
      {items.length >= 1
        ? items.map((item) => {
            return (
              <Box>
                <DefaultCardLayot
                  title={item.title}
                  description={item.description}
                />
              </Box>
            );
          })
        : ""}
    </Box>
  );
}
