import { RadioOption } from "./../../shared/radio/radio-option.model";
import { Component, OnInit } from "@angular/core";

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

  constructor() {}

  ngOnInit(): void {}
}
