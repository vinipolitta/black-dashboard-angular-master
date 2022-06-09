import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";
import { Restaurant } from "src/app/shared/interfaces/restaurant";

@Component({
  selector: "app-restaurant-table",
  templateUrl: "./restaurant-table.component.html",
  styleUrls: ["./restaurant-table.component.scss"],
  animations: [
    trigger("restaurantAppeared", [
      state("ready", style({ opacity: 1 })),
      transition("void => ready", [
        style({ opacity: 0, trasform: "translate(-30px, -10px)" }),
        animate("1000ms 0s ease-in-out"),
      ]),
    ]),
  ],
})
export class RestaurantTableComponent implements OnInit {
  restaurantState = 'ready';
  @Input() coluns;
  @Input() dataTables: Restaurant[];

  constructor() {}

  ngOnInit() {}
}
