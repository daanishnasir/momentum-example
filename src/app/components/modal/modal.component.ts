/** @component modal */

import {
  Component,
  Input,
  ElementRef,
  Optional,
  Inject,
  Output,
  EventEmitter,
} from '@angular/core';
import { FocusTrap, FocusTrapFactory } from '@angular/cdk/a11y';
import { DOCUMENT } from '@angular/common';

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
  <div  *ngIf="show" [ngClass]="[backdrop ? 'md-modal__backdrop fade in': 'fade in']"  (click)="close()">
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
  `
})
export class ModalComponent {
  /** @option Determines the visibility and ability to edit the backdrop of the Modal | true */
  @Input() public backdrop: Boolean = true;

  /** @option To enable/disable clicking on underlay to exit modal | false */
  @Input() public backdropClickExit: Boolean = false;

  private _classList: '';
  /** @option Optional css class names | '' */
  @Input()
  set class(value) {
    this._classList = value;
  }
  get class() {
    return this._classList;
  }

  private _show: Boolean = false;
  /** @option Show/hide modal | 'false' */
  @Input()
  set show(value: Boolean) {
    this._show = value;
    if ( this._show ) {
      this._trapFocus();
    }
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

   @Output() closeOnBackdrop: EventEmitter<any> = new EventEmitter<any>();

   private _focusTrap: FocusTrap;

   constructor(
     private _elRef: ElementRef,
     private _focusTrapFactory: FocusTrapFactory,
     @Optional() @Inject(DOCUMENT) private _document: any
     ) {}

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

   close() {
     if ( this.backdropClickExit ) {
       this.closeOnBackdrop.emit();
     }
   }
}
