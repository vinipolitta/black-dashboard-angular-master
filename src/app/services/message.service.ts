import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }


  showNotification(typeMessage, contextMessage, titleMessage, position?, positionAlert?){
    var definePossition = position ? position : 'bottom';
    var alert = positionAlert ? positionAlert : 'right';

    this.toastr[typeMessage](contextMessage, titleMessage, {
      disableTimeOut: true,
      closeButton: true,
      enableHtml: true,
      toastClass: `alert alert-${typeMessage} alert-with-icon`,
      positionClass: `toast-${definePossition}-${alert}`
    });
  }
}
