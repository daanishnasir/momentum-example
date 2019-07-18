import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ModalService {
  private isModalOpened: Subject<boolean>;
  isModalOpened$: any;

  constructor() {
    this.isModalOpened = new Subject<boolean>();
    this.isModalOpened$ = this.isModalOpened.asObservable();
   }

  setModalStatus(isOpen: boolean) {
    this.isModalOpened.next(isOpen);
  }

}
