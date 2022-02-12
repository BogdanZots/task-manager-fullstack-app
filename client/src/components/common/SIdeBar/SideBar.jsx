import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const drawerWidth = 240;

function SideBar(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
      ].map((task, index) => (
        <ListItem button key={task.title}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <Link to={task.linkTo}>
            <ListItemText primary={task.title} />
          </Link>
        </ListItem>
      ))}
    </List>
  );

  return <Box sx={{ display: "inline-flex", marginTop: "72px" }}>{drawer}</Box>;
}

export default SideBar;
