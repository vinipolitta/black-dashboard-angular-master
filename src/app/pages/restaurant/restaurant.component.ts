import { RestaurantService } from './../../services/restaurant.service';
import { Restaurant } from './../../shared/interfaces/restaurant';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-restaurant",
  templateUrl: "./restaurant.component.html",
  styleUrls: ["./restaurant.component.scss"],
})
export class RestaurantComponent implements OnInit {
  coluns = ["name", "rating", "deliveryEstimate", "category", "action"];
  dataTables : Restaurant[];
  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.getRestaurat();
  }

  getRestaurat() {
    this.restaurantService.getRestaurant().subscribe((res: any) => {
      this.dataTables = res;
    })
  }
}
