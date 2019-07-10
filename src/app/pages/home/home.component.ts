import { Component } from '@angular/core';
import { ModalExample } from './modal-example.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ ModalExample ]
})
export class HomeComponent  {

  constructor(public modal: ModalExample) {}

  openHomePageModal() {
    this.modal.openModal();
  }



}
