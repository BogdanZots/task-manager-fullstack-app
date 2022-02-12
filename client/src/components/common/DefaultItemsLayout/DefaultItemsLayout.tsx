import Box from "@mui/material/Box";
import React from "react";
import DefaultCardLayot from "../DefaultCardLayout/DefaultCardLayout";
import { IReminds } from "../../../models/IReminds";

interface IDefaultItemsLayout {
  items: Array<any>;
}
export default function DefaultItemsLayout(props: IDefaultItemsLayout) {
  const { items } = props;
  return (
    <Box sx={{ display: "inline" }}>
      {items.map((item) => {
        return (
          <>
            <div>{item.title}</div>
            <DefaultCardLayot />
          </>
        );
      })}
    </Box>
  );
}
