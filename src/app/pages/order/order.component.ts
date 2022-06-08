import { CardItem } from "./../../shared/interfaces/card-item";
import { OrderService } from "./../../services/order.service";
import { RadioOption } from "./../../shared/radio/radio-option.model";
import { Component, OnInit } from "@angular/core";
import { Order, OrderItem } from "./order.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"],
})
export class OrderComponent implements OnInit {
  coluns = ["Quantities", "Item", "Description", "Subtotal"];

  paymentOptions: RadioOption[] = [
    { label: "Dinheiro", value: "MON" },
    { label: "Cartao Debito", value: "DEB" },
    { label: "Cartao Refeicao", value: "REF" },
  ];

  constructor(private orderService: OrderService, private route: Router) {}
  delivery = 8;

  ngOnInit(): void {
    console.log(this.cartItem().length === 0);
  }

  itemsValue(): number {
    return this.orderService.itemValue();
  }

  cartItem(): CardItem[] {
    return this.orderService.cartItems();
  }

  increaseQty(item: CardItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CardItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CardItem) {
    this.orderService.remove(item);
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItem().map(
      (item: CardItem) => new OrderItem(item.quantity, item.menuItem.id)
    );
    this.orderService.checkOrder(order).subscribe((orderId: Order) => {
      this.route.navigate(['/order-summary']);
      this.orderService.clear();
    });
    console.log(order);
  }
}
