import {
  Component,
  OnInit,
  EventEmitter,
  ElementRef,
  Type,
  DynamicComponentLoader
} from 'angular2/core';

@Component({
  selector: 'dcl-component, [ngTable]',
  inputs: ['type', 'data' ],
  outputs: ['cOutput'],
  template: '<dcl-reference #child></dcl-reference>',
  directives: [ ]
})
export class DCLComponent implements OnInit {
  // Inputs
  public type: Type;
  public data: any;

  // Outputs (Events)
  public cOutput: EventEmitter<any> = new EventEmitter();

  constructor(
    private _dcl: DynamicComponentLoader,
    private _elem: ElementRef) { }

  ngOnInit() {
    this._dcl.loadIntoLocation(this.type, this._elem, 'child');
  }

}
