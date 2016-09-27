import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {DCLComponent} from './dcl-component.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DCLComponent],
  exports: [DCLComponent],
  entryComponents: [DCLComponent]
})
export class DCLModule { }
