import { Component} from '@angular/core';

@Component({
  selector: 'app-modal-body',
  template: `
    <ng-content></ng-content>
  `,
// tslint:disable-next-line: use-host-property-decorator
  host: {
    class: 'md-modal__body'
  }
})
export class ModalBodyComponent { }
