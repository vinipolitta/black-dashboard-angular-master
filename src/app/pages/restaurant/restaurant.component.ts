import { RestaurantService } from "../../core/services/restaurant.service";
import { Restaurant } from "./../../shared/interfaces/restaurant";
import { Component, OnInit, Output } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { MessageService } from "src/app/core/services/message.service";

@Component({
  selector: "app-restaurant",
  templateUrl: "./restaurant.component.html",
  styleUrls: ["./restaurant.component.scss"],
})
export class RestaurantComponent implements OnInit {
  @Output() coluns = [
    "name",
    "rating",
    "deliveryEstimate",
    "category",
  ];
  @Output() dataTables: Restaurant[];
  constructor(
    private restaurantService: RestaurantService,
    private message: MessageService
  ) {}

  ngOnInit(): void {
    this.getRestaurat();
  }

  getRestaurat() {
    this.restaurantService.getRestaurant().subscribe(
      (res: Restaurant[]) => {this.dataTables = res
      },
      (error: any) => {
        this.message.showNotification(
          "error",
          "Error loading restaurants",
          "Erro!!!"
        );
        console.error(error);
      }
    );
  }
}
