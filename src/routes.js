import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";

var routes = [
  {
    path: "/Inicio",
    name: "Inicio",
    icon: "tim-icons icon-single-copy-04",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/habitaciones",
    name: "Habitaciones",
    icon: "tim-icons icon-components",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/Reservaciones",
    name: "Reservaciones",
    icon: "tim-icons icon-calendar-60",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/Personal",
    name: "Personal",
    icon: "tim-icons icon-single-02",
    component: Map,
    layout: "/admin"
  },
  {
    path: "/Inventario",
    name: "Inventario",
    icon: "tim-icons icon-app",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/administracion",
    name: "Administración",
    icon: "tim-icons icon-notes",
    component: UserProfile,
    layout: "/admin"
  },
  /*
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/rtl-support",
    name: "RTL Support",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    component: Rtl,
    layout: "/rtl"
  }*/
];
export default routes;
