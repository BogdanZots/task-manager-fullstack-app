import * as React from "react";
import Box from "@mui/material/Box";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { NavLink } from "react-router-dom";
import s from "styled-components";

const StyledLink = s(NavLink)`
text-decoration:none;
&.active {
  color:black;
}
`;

const drawerWidth = 240;

function SideBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const drawer = (
    <List sx={{ dispaly: "inline", ul: { display: "inline" } }}>
      {[
        {
          title: "Заметки",
          linkTo: "/notes",
        },
        {
          title: "Корзина",
          linkTo: "/batch",
        },
        {
          title: "Напоминания",
          linkTo: "/reminds",
        },
        {
          title: "Страница админа",
          linkTo: "/admin",
        },
      ].map((task, index) => (
        <ListItem button key={task.title}>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <StyledLink to={task.linkTo}>
            <ListItemText primary={task.title} />
          </StyledLink>
        </ListItem>
      ))}
    </List>
  );

  return <Box sx={{ display: "inline-flex", marginTop: "72px" }}>{drawer}</Box>;
}

export default SideBar;
