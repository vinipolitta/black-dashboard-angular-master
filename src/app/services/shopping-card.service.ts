import { MenuItem } from "./../shared/interfaces/menu-item";
import { CardItem } from "./../shared/interfaces/card-item";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ShoppingCardService {
  items: CardItem[] = [];

  constructor() {}

  clear() {
    this.items = [];
  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
    if (foundItem) {
      foundItem.quantity = foundItem.quantity + 1;
    } else {
      this.items.push(new CardItem(item));
    }
  }

  removeItem(item: CardItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  total(): number {
    return this.items
      .map((item) => item.value())
      .reduce((prev, value) => prev + value, 0);
  }
}
