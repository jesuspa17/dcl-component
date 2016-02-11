import {Component, EventEmitter, Output} from 'angular2/core';

@Component({
  selector: 'demo-component',
  template: '<div (click)="click($event)">Child {{_campo}}</div>'
})
export class DemoComponent {

  private _campo: number = 0;

  // Outputs (Events)
  @Output() public cOutput: EventEmitter<any> = new EventEmitter();

  get campo(): number {
    this.cOutput.emit(this._campo);
    return this._campo;
  }

  set campo(campo: number) {
    this._campo = campo;
    this.cOutput.emit(this._campo);
  }

  click(event: any) {
    this.campo++;
  }

}
