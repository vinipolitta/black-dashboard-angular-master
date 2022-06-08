import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.scss"],
})
export class RatingComponent implements OnInit {
  rates = [1, 2, 3, 4, 5];
  rate = 0;
  previousRate: number;

  @Output() rated = new EventEmitter<number>()

  constructor() {}

  ngOnInit(): void {}

  getStars(rating: any) {
    if (rating <= this.rate) {
      return "fa fa-star";
    } else if (rating > this.rate) {
      return "fa-regular fa-star";
    }
  }

  setRate(r) {
    this.rate = r;
    this.previousRate = undefined;
    this.rated.emit(this.rate)
  }

  setTemporatyRate(r) {
    if (this.previousRate === undefined) {
      this.previousRate = this.rate;
    }
    this.rate = r;
  }

  clearTemporaryRate() {
    if (this.previousRate !== undefined) {
      this.rate = this.previousRate;
      this.previousRate = undefined;
    }
  }
}
