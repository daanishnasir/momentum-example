import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal-example',
  templateUrl: 'modal-example.html'
})
export class ModalExample {
  @Input() showMe: boolean = false;
  @Output() showMeChange: EventEmitter<any> = new EventEmitter();

  openModal() {
    this.showMe = true;
    this.showMeChange.emit();
  }

  closeModal() {
    this.showMe = false;
    this.showMeChange.emit();
  }
}
