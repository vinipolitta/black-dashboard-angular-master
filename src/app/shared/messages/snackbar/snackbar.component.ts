import { delay, Observable } from "rxjs";
import { NotificationService } from "./../../../core/services/notification.service";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { timer } from "rxjs";
import { MessageService } from "src/app/core/services/message.service";

@Component({
  selector: "app-snackbar",
  templateUrl: "./snackbar.component.html",
  styleUrls: ["./snackbar.component.scss"],
  animations: [
    trigger("snack-visibility", [
      state(
        "hidden",
        style({
          opacity: 0,
          bottom: "0px",
        })
      ),
      state(
        "visible",
        style({
          opacity: 1,
          bottom: "30px",
        })
      ),
      transition("hidden => visible", animate("500ms 0s ease-in")),
      transition("visible => hidden", animate("500ms 0s ease-out")),
    ]),
  ],
})
export class SnackbarComponent implements OnInit {
  message: string = "testando";
  snackVisibility = "hidden";
  timerSnackBar = timer(3000);

  constructor(
    private notification: NotificationService,
    public msgService: MessageService
  ) {}

  ngOnInit(): void {
    this.notify();
  }

  notify() {
    this.notification.notifier.subscribe(async (msg: string) => {
      this.msgService.showNotification(
        "info",
        `${msg}`,
        "Info!!!",
        "bottom",
        "center"
      );
      this.timerSnackBar.subscribe(() => {
        this.snackVisibility = "hidden";
      });
    });
  }
}
