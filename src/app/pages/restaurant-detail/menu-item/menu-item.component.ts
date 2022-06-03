import { MenuItem } from './../../../shared/interfaces/menu-item';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  // coluns = ['name', 'description', 'price', 'add'];
  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  emitAddEvent() {
    this.add.emit(this.menuItem);
  }

}
