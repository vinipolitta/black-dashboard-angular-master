import { Observable } from "rxjs";
import { RestaurantService } from "./../../../services/restaurant.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-reviews",
  templateUrl: "./reviews.component.html",
  styleUrls: ["./reviews.component.scss"],
})
export class ReviewsComponent implements OnInit {
  reviews: Observable<any>;
  routeId;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeId = this.route.parent.snapshot.params['id'];
    this.getReviews()
  }

  getReviews() {
    this.reviews = this.restaurantService.getReviews(this.routeId);
    console.log('reviews',this.reviews);

  }
}
