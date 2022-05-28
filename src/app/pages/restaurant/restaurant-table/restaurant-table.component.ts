import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/shared/interfaces/restaurant';

@Component({
  selector: 'app-restaurant-table',
  templateUrl: './restaurant-table.component.html',
  styleUrls: ['./restaurant-table.component.scss']
})
export class RestaurantTableComponent implements OnInit {
  @Input() coluns;
  @Input() dataTables: Restaurant[];


  constructor() { }

  ngOnInit() {
    console.log('aqui', this.dataTables);
    console.log('aqui', this.coluns);



  }

}
