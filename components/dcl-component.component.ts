import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  ReflectiveInjector,
  Renderer,
  SimpleChange,
  Type,
  ViewContainerRef
} from '@angular/core';
import {createComponent} from './create-components';

export interface InitFunc {
  (component: ComponentRef<any>, identifier: any, data: any): void;
}

@Component({
  selector: 'dclcomponent',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DCLComponent implements OnInit, OnChanges {
  // Inputs
  @Input() public type: Type<any>;
  @Input() public init: InitFunc;
  @Input() public data: any;
  @Input() public identifier: any;

  private _cmpRef: ComponentRef<any>;

  constructor(
    private _cr: ComponentFactoryResolver,
    private _renderer: Renderer,
    private _elem: ElementRef,
    private _view: ViewContainerRef
  ) { }

  ngOnInit() {
    if (this.type) {

      this._cmpRef = createComponent(this._cr, this.type, this._view, undefined);

      this._view.element.nativeElement.appendChild(this._cmpRef.location.nativeElement);

      if (this.init) {
        this.init(this._cmpRef, this.identifier, this.data);
      }

    } else {
      this._renderer.createText(this._elem.nativeElement, this.data ? this.data : '');
    }
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    if (this._cmpRef) {
      this._view.element.nativeElement.removeChild(this._cmpRef.location.nativeElement);
      this.ngOnInit();
    }
  }
}
