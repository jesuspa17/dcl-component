import {Component} from 'angular2/core';
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
      <dcl-component [type]="component"></dcl-component>
    </div>
    <br>
  </section>
  `,
  directives: [DCLComponent, CORE_DIRECTIVES]
})
export class DCLSection {
  component: any = DemoComponent;
}
