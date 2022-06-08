import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from "src/app/pages/home/home.component";
import { RestaurantComponent } from "src/app/pages/restaurant/restaurant.component";
import { RestaurantTableComponent } from "src/app/pages/restaurant/restaurant-table/restaurant-table.component";
import { RestaurantDetailComponent } from "src/app/pages/restaurant-detail/restaurant-detail.component";
import { MenuComponent } from "src/app/pages/restaurant-detail/menu/menu.component";
import { ShoppingCardComponent } from "src/app/pages/restaurant-detail/shopping-card/shopping-card.component";
import { MenuItemComponent } from "src/app/pages/restaurant-detail/menu-item/menu-item.component";
import { ReviewsComponent } from "src/app/pages/restaurant-detail/reviews/reviews.component";
import { OrderSummaryComponent } from "src/app/pages/order-summary/order-summary.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    HomeComponent,
    RestaurantComponent,
    RestaurantTableComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCardComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,

    // RtlComponent
  ],
})
export class AdminLayoutModule {}
