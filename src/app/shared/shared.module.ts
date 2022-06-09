import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { MessagesComponent } from "./messages/messages.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { OrderService } from "../core/services/order.service";
import { RestaurantService } from "../core/services/restaurant.service";
import { ShoppingCardService } from "../core/services/shopping-card.service";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

@NgModule({
  declarations: [
    InputComponent,
    RadioComponent,
    MessagesComponent,
    RatingComponent,
    SnackbarComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    InputComponent,
    RadioComponent,
    MessagesComponent,
    RatingComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SnackbarComponent
  ],
})
export class SharedModule {


}
