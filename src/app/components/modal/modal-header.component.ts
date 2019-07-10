import { Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-modal-header',
  template: `
    <span class="md-modal__title">{{headerLabel}}</span>
    <span *ngIf="message" class="md-modal__message">{{
      message
    }}</span>
    <button class="md-close md-modal__close"  (click)="close()"></button>
    <ng-content></ng-content>
  `,
  styleUrls: ['./modal.component.scss'],
// tslint:disable-next-line: use-host-property-decorator
  host: {
    class: 'md-modal__header'
  }
})
export class ModalHeaderComponent {
  @Input() headerLabel: String;

  @Output() closeButtonClick: EventEmitter<any> = new EventEmitter<any>();

  close() {
    this.closeButtonClick.emit();
  }
}
