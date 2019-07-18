/** @component modal-header */

import {
  Component,
  Input,
  HostBinding,
  EventEmitter,
  Output,
} from '@angular/core';
import { ModalService } from './modal.service';


@Component({
  selector: 'md-modal-header',
  template: `
  <span class="md-modal__title">{{headerLabel}}</span>
  <span *ngIf="message" class="md-modal__message">{{
    message
  }}</span>
  <button
    *ngIf="showCloseButton"
    class="md-close md-modal__close"
    (click)="close()"
    aria-label="close"
  >
  </button>
  `,
})
export class ModalHeaderComponent {

  /** @option Optional css class string | '' */
  @Input() public class: string = '';
  /** ModalHeader label text | '' */
  @Input() public headerLabel: string = '';
  /** Modal message | '' */
  @Input() public message: string = '';
  /** show/hide close button | true */
  @Input() public showCloseButton: boolean = true;

  @HostBinding('class') get className(): string {
    return (
      'md-modal__header' + `${(this.class && ` ${this.class}`) || ''}` + ``
    );
  }

  constructor(private modalService: ModalService){}

  close() {
    this.modalService.setModalStatus(false);
  }
}
