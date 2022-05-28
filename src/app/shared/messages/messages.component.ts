import { ToastrService } from 'ngx-toastr';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  @Input() typeMessage = 'info'
  @Input() contextMessage: string = 'teste';
  @Input() titleMessage: string = 'teste@@';

  staticAlertClosed7 = false;

  constructor(private toastr: ToastrService) {}

  showNotification(from, align){

    this.toastr[this.typeMessage](this.contextMessage, this.titleMessage, {
      disableTimeOut: true,
      closeButton: true,
      enableHtml: true,
      toastClass: `alert alert-${this.typeMessage} alert-with-icon`,
      positionClass: 'toast-bottom-right'
    });
  }

  ngOnInit() {}
}
