import { Component, ElementRef } from '@angular/core';
import { ModalExample } from './modal-example.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ ModalExample ]
})
export class HomeComponent  {
 // tslint:disable-net-line:ban-types
 public showModal = false;
  constructor() {
  }






}
