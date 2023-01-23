import Box from "@mui/material/Box";
import DefaultCardLayot from "../DefaultCardLayout/DefaultCardLayout";
import { IRemind } from "../../../models/reminds/IReminds";
import s from "styled-components";

interface IDefaultItemsLayout {
  items: Array<IRemind>;
  onRemove: (id: string) => void;
}

const ItemsLayoutContainer = s(Box)`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-between;
width: 100%;
`;

export default function DefaultItemsLayout(props: IDefaultItemsLayout) {
  const { items, onRemove } = props;
  return (
    <ItemsLayoutContainer>
      {items.length >= 1
        ? items.map(item => {
            return (
              <Box>
                <DefaultCardLayot
                  id={item._id}
                  onRemove={onRemove}
                  title={item.title}
                  description={item.description}
                />
              </Box>
            );
          })
        : ""}
    </ItemsLayoutContainer>
  );
}
