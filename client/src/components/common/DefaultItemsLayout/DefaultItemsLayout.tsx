import Box from "@mui/material/Box";
import React from "react";
import DefaultCardLayot from "../DefaultCardLayout/DefaultCardLayout";
import { IReminds } from "../../../models/IReminds";

interface IDefaultItemsLayout {
  items: Array<any>;
}
export default function DefaultItemsLayout(props: IDefaultItemsLayout) {
  const { items } = props;
  console.log("items", items);
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
