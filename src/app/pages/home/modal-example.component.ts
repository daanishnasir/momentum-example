import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'modal-example',
  templateUrl: 'modal-example.html'
})
export class ModalExample {
  @Input() showMe: Boolean = false;

  closeModal() {
    this.showMe = false;
  }
}
