import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

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
import { MessagesComponent } from "src/app/shared/messages/messages.component";
import { RestaurantDetailComponent } from "src/app/pages/restaurant-detail/restaurant-detail.component";
import { MenuComponent } from "src/app/pages/restaurant-detail/menu/menu.component";
import { ShoppingCardComponent } from "src/app/pages/restaurant-detail/shopping-card/shopping-card.component";
import { MenuItemComponent } from "src/app/pages/restaurant-detail/menu-item/menu-item.component";
import { ReviewsComponent } from "src/app/pages/restaurant-detail/reviews/reviews.component";
import { OrderComponent } from "src/app/pages/order/order.component";
import { InputComponent } from "src/app/shared/input/input.component";
import { RadioComponent } from "src/app/shared/radio/radio.component";
import { OrderItensComponent } from "src/app/pages/order/order-itens/order-itens.component";
import { DeliveryCostsComponent } from "src/app/pages/order/delivery-costs/delivery-costs.component";
import { OrderSummaryComponent } from "src/app/pages/order-summary/order-summary.component";
import { RatingComponent } from "src/app/shared/rating/rating.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
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
    MessagesComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCardComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItensComponent,
    DeliveryCostsComponent,
    OrderSummaryComponent,
    RatingComponent

    // RtlComponent
  ],
})
export class AdminLayoutModule {}
