import { ReviewsComponent } from "./../../pages/restaurant-detail/reviews/reviews.component";
import { MenuComponent } from "./../../pages/restaurant-detail/menu/menu.component";
import { RestaurantDetailComponent } from "./../../pages/restaurant-detail/restaurant-detail.component";
import { RestaurantComponent } from "src/app/pages/restaurant/restaurant.component";
import { HomeComponent } from "./../../pages/home/home.component";
import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "", redirectTo: 'restaurant', pathMatch: 'full' },

  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "home", component: HomeComponent },
  { path: "restaurant", component: RestaurantComponent },
  {
    path: "restaurant/:id",
    component: RestaurantDetailComponent,
    children: [
      { path: "", redirectTo: 'menu', pathMatch: 'full' },
      { path: "menu", component: MenuComponent },
      { path: "reviews", component: ReviewsComponent },
    ],
  },

  // { path: "rtl", component: RtlComponent }
];
