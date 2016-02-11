import {
  Component,
  ComponentRef,
  OnInit,
  EventEmitter,
  ElementRef,
  Type,
  DynamicComponentLoader
} from 'angular2/core';

export interface InitFunc {
  (component: ComponentRef): void;
}

@Component({
  selector: 'dcl-component, [ngTable]',
  inputs: ['type', 'init' ],
  template: '<dcl-reference #child></dcl-reference>'
})
export class DCLComponent implements OnInit {

  // Inputs
  public type: Type;
  public init: InitFunc;

  constructor(
    private _dcl: DynamicComponentLoader,
    private _elem: ElementRef) { }

  ngOnInit() {
    this._dcl.loadIntoLocation(this.type, this._elem, 'child').then((res) => {
      if (this.init) {
        this.init(res);
      }
    });
  }

}
