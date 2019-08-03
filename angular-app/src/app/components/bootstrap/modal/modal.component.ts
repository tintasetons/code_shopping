import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';

declare const $;

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() onHide: EventEmitter<Event> = new EventEmitter<Event>();

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
      const JqueryElement = this.getJQueryElement();

      JqueryElement.find('modal-title').addClass('modal-title');
      JqueryElement.find('modal-body').addClass('modal-body');
      JqueryElement.find('modal-footer').addClass('modal-footer');

      JqueryElement.on('hidden.bs.modal', (e) => {
        console.log(e);
        this.onHide.emit(e);
      })
  }

  show() {
    this.getJQueryElement().modal('show');
  }

  hide() {
    this.getJQueryElement().modal('hide');
  }

  private getJQueryElement() {
    const nativeElement = this.element.nativeElement;
    return $(nativeElement.firstChild);
  }

}
