/** @component modal */

import {
  Component,
  Input,
  ElementRef,
  Optional,
  Inject,
  Output,
  EventEmitter
} from '@angular/core';
import { FocusTrap, FocusTrapFactory } from '@angular/cdk/a11y';
import { DOCUMENT } from '@angular/common';
import { ModalService } from './modal.service';
import { Subscription } from 'rxjs';

export type SizeType =
  | 'large'
  | 'medium'
  | 'default'
  | 'small'
  | 'full'
  | 'dialog';

@Component({
  selector: 'md-modal',
  template: `
  <div  *ngIf="show" [ngClass]="[backdrop ? 'md-modal__backdrop fade in': 'fade in']"  (click)="closeModal()">
    <div
      role="dialog"
      id="{{htmlId}}"
      class="md-modal md-modal--{{sizeType}} in {{class}}"
      attr.aria-labelledby="{{ariaLabel}}"
      aria-modal="true"
      >
      <div class="md-modal__content" cdkTrapFocus >
        <div class="md-modal__flex-container">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  </div>
  `,
  providers: [ModalService]
})
export class ModalComponent {
  /** @option Determines the visibility and ability to edit the backdrop of the Modal | true */
  @Input() public backdrop: boolean = true;

  /** @option To enable/disable clicking on underlay to exit modal | false */
  @Input() public backdropClickExit: boolean = false;

  private _classList: '';
  /** @option Optional css class names | '' */
  @Input()
  set class(value) {
    this._classList = value;
  }
  get class() {
    return this._classList;
  }

  private _show: boolean = false;
  /** @option Show/hide modal | 'false' */
  @Input()
  set show(value: boolean) {
    this._show = value;
    if ( this._show ) {
      this._trapFocus();
    }
    this.modalService.setModalStatus(this.show);
  }
  get show() {
    return this._show;
  }

  /** @option Size of the modal | 'default' */
  @Input() public sizeType: SizeType = 'default';

  /** @option htmlId for modal | 'md-modal' */
  @Input() public htmlId: String = 'md-modal';

   /** @option ariaLabel for modal | '' */
   @Input() public ariaLabel: String = '';

   /** @option data array of data for modal | [] */
   @Input() public data: [];

   // tslint:disable-next-line: no-output-on-prefix
   @Output() onHide: EventEmitter<any> = new EventEmitter();

   @Output() closeOnBackdrop: EventEmitter<any> = new EventEmitter();

   private _focusTrap: FocusTrap;
   private sub: Subscription;

   constructor(  private modalService: ModalService,
     private _elRef: ElementRef,
     private _focusTrapFactory: FocusTrapFactory,
     @Optional() @Inject(DOCUMENT) private _document: any
     ) {
      this.sub = this.modalService.isModalOpened$.subscribe(isOpen => {
        if ( !isOpen ) {
          this.closeModal();
        }
      });
      this.modalService.setModalStatus(this.show);
     }




   private _trapFocus() {
     const element = this._elRef.nativeElement;

     if ( !this._focusTrap ) {
       this._focusTrap = this._focusTrapFactory.create(element);
     }

     const activeElement = this._document.activeElement;
     this._focusTrap.focusInitialElementWhenReady();
     if (activeElement !== element && !element.contains(activeElement)) {
      element.focus();
      activeElement.blur();
    }
   }

  showModal() {

   }

  closeModal() {
    if ( this.show === true ) {
      this.show = false;
      this.onHide.emit();
      if ( this.backdropClickExit ) {
        this.closeOnBackdrop.emit();
      }
    }
   }
}
