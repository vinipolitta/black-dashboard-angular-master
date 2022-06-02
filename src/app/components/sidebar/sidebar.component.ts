import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "icon-chart-pie-36",
    class: "",
  },
  {
    path: "/home",
    title: "Home",
    icon: "icon-bank",
    class: "",
  },
  {
    path: "/restaurant",
    title: "Restaurant",
    icon: "icon-cart",
    class: "",
  },
  {
    path: "/icons",
    title: "Icons",
    icon: "icon-atom",
    class: "",
  },
  // {
  //   path: "/maps",
  //   title: "Maps",
  //   rtlTitle: "خرائط",
  //   icon: "icon-pin",
  //   class: "",
  // },
  {
    path: "/notifications",
    title: "Notifications",
    icon: "icon-bell-55",
    class: "",
  },

  // {
  //   path: "/user",
  //   title: "User Profile",
  //   rtlTitle: "ملف تعريفي للمستخدم",
  //   icon: "icon-single-02",
  //   class: "",
  // },
  // {
  //   path: "/tables",
  //   title: "Table List",
  //   icon: "icon-puzzle-10",
  //   class: "",
  // },
  // {
  //   path: "/typography",
  //   title: "Typography",
  //   rtlTitle: "طباعة",
  //   icon: "icon-align-center",
  //   class: "",
  // },
  {
    path: "/rtl",
    title: "RTL Support",
    icon: "icon-world",
    class: "",
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
