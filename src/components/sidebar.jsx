import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import '../App.css'
export function Websidebar() {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 fixed w-1/4">
      <List>
        <br /><br /><br /><br />
        <ListItem className="cardbackground" style={{ backgroundColor: "#E4F0FE", color: "#3C92D1" }}>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <br />
        <hr />
        <br />
        <h3 style={{ marginLeft: "15px" }}>Donation</h3>
        <ListItem className="cardbackground">
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          Charities
        </ListItem>
        <ListItem className="cardbackground">
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Causes
        </ListItem>
        <ListItem className="cardbackground">
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Users
        </ListItem>
        <hr />
        <br />
        <h3 style={{ marginLeft: "15px" }}>Management</h3>
        <ListItem className="cardbackground">
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Push Notification
        </ListItem>
        <ListItem className="cardbackground">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Reports
        </ListItem>
        <ListItem className="cardbackground">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          The Good App free
        </ListItem>
        <ListItem className="cardbackground">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inquires
        </ListItem>
        <ListItem className="cardbackground">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Admons
        </ListItem>
      </List>
    </Card>
  );
}