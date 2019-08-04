import {Injectable} from '@angular/core';
import PNotify from "pnotify/dist/es/PNotify";
import PNotifyButtons from "pnotify/dist/es/PNotifyButtons";

@Injectable({
  providedIn: 'root'
})
export class NotifyMessageService {

  constructor() {
  }

  success(title:string, text:string, type:Types ) {
    PNotify.success({
      title: 'Oh No!',
      text: 'Something terrible happened.'
    });
  }

  error(title:string, text:string, type:Types ) {
    PNotify.error({
      title: 'Oh No!',
      text: 'Something terrible happened.'
    });
  }
}

enum Types{
  success = 'success',
  error = 'error'
}

