import { ShoppingCardService } from "./../../../services/shopping-card.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shopping-card",
  templateUrl: "./shopping-card.component.html",
  styleUrls: ["./shopping-card.component.scss"],
})
export class ShoppingCardComponent implements OnInit {
  constructor(private shoppingCardService: ShoppingCardService) {}

  ngOnInit(): void {}

  items(): any[] {
    return this.shoppingCardService.items;
  }

  total(): number {
    return this.shoppingCardService.total();
  }

  clear() {
    this.shoppingCardService.clear();
  }

  removeItem(item) {
    console.log(item);

    this.shoppingCardService.removeItem(item);

  }

  addItem(item) {
    this.shoppingCardService.addItem(item);
  }
}
