import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ ]
})
export class HomeComponent  {
  public showModal: boolean;

  constructor() {}

  openHomePageModal() {
    this.showModal = true;
  }



}
