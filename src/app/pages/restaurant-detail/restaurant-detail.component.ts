import { Restaurant } from 'src/app/shared/interfaces/restaurant';
import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant;
  routerId;

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.routerId = this.route.snapshot.params['id'];
     this.getRestaurantById();
  }

  getRestaurantById() {
    this.restaurantService.getRestaurantById(this.routerId).subscribe(res => {
      this.restaurant = res
      console.log(this.restaurant);

    })
  }

}
