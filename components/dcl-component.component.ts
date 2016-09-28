import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  ReflectiveInjector,
  Renderer,
  Type,
  ViewContainerRef
} from '@angular/core';
import {createComponent} from './create-components';

export interface InitFunc {
  (component: ComponentRef<any>, identifier: any, data: any): void;
}

@Component({
  selector: 'dclcomponent',
  template: ''
})
export class DCLComponent implements OnInit {
  // Inputs
  @Input() public type: Type<any>;
  @Input() public init: InitFunc;
  @Input() public data: any;
  @Input() public identifier: any;

  constructor(
    private _cr: ComponentFactoryResolver,
    private _renderer: Renderer,
    private _elem: ElementRef,
    private _view: ViewContainerRef) { }

  ngOnInit() {
    if (this.type) {

      const cmpRef = createComponent(this._cr, this.type, this._view, undefined);

      this._view.element.nativeElement.appendChild(cmpRef.location.nativeElement);

      if (this.init) {
        this.init(cmpRef, this.identifier, this.data);
      }

    } else {
      this._renderer.setText(this._elem.nativeElement, this.data);
    }
  }

}
