import {Component, ComponentRef} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {DCLComponent} from '../../dcl-component';
import {DemoComponent} from './demo-component';

@Component({
  selector: 'dcl-section',
  template: `
  <br>
  <section>
    <hr>
    <div>
      {{_data}}
      <dcl-component [type]="_component"
                     [init]="_func">
      </dcl-component>
    </div>
    <br>
  </section>
  `,
  directives: [DCLComponent, CORE_DIRECTIVES]
})
export class DCLSection {

  private _component: any = DemoComponent;
  private _data: number = 1;
  private _func: any;

  private value: number = 0;

  constructor() {
    this._func = this.pruebaInit.bind(this);
  }

  private pruebaInit(component: ComponentRef): void {
    console.log(this.value);
    console.log('Private variable value: %d and data: %d', this.value, this._data);
    component.instance._campo = this._data;
    console.log(component.instance.cOutput);
    component.instance.cOutput.subscribe((val: number) => {
      console.log('emitted: %d', val);
      this._data = val;
    });
  }

}
