import { NgModule } from "@angular/core";
import { NotificationService } from "./services/notification.service";
import { OrderService } from "./services/order.service";
import { RestaurantService } from "./services/restaurant.service";
import { ShoppingCardService } from "./services/shopping-card.service";

@NgModule({
  providers: [ShoppingCardService, RestaurantService, OrderService, NotificationService],
})
export class CoreModule {}
