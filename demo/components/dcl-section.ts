import {Component, ComponentRef} from '@angular/core';

import {DemoComponent} from './demo-component';

@Component({
  selector: 'dcl-section',
  template: `
  <br>
  <section>
    <hr>
    <div>
      {{_data}}
      <dclcomponent [type]="_component"
                     [init]="_func"
                     [data]="_data">
      </dclcomponent>
      <dclcomponent [data]="_data2"></dclcomponent>
    </div>
    <br>
  </section>
  `
})
export class DCLSection {

  private _component: any = DemoComponent;
  private _data: number = 1;
  private _func: any;

  private _data2: number = 0;

  private value: number = 0;

  constructor() {
    this._func = this.pruebaInit.bind(this);
  }

  private pruebaInit(component: ComponentRef<any>, data: any): void {
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
