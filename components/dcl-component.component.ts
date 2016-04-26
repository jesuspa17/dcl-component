import {
  Component,
  ComponentRef,
  OnInit,
  EventEmitter,
  ViewContainerRef,
  ElementRef,
  Renderer,
  Type,
  DynamicComponentLoader
} from 'angular2/core';

export interface InitFunc {
  (component: ComponentRef, identifier: any, data: any): void;
}

@Component({
  selector: 'dcl-component, [ngTable]',
  inputs: ['type', 'init', 'data', 'identifier' ],
  template: ''
})
export class DCLComponent implements OnInit {

  // Inputs
  public type: Type;
  public init: InitFunc;
  public data: any;
  public identifier: any;

  constructor(
    private _dcl: DynamicComponentLoader,
    private _renderer: Renderer,
    private _elem: ElementRef,
    private _view: ViewContainerRef) { }

  ngOnInit() {
    if (this.type) {
      this._dcl.loadNextToLocation(this.type, this._view)
      .then((res: ComponentRef) => {
        if (this.init) {
          this.init(res, this.identifier, this.data);
        }
      });
    } else {
      this._renderer.setText(this._elem.nativeElement, this.data);
    }
  }

}
