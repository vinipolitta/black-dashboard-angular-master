import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
