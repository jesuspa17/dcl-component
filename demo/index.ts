import {NgModule, Component} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgClass} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import {DCLModule} from '../dcl-component';

import {DCLSection} from './components/dcl-section';
import {DemoComponent} from './components/demo-component';

let gettingStarted = require('./getting-started.md');

@Component({
  selector: 'app',
  template: `
  <main>
    <div>
      <h1>dcl-component</h1>
      <p>Native Angular2 directives for Component injection</p>
      <a href="https://github.com/jdelgadoalfonso/dcl-component">View on GitHub</a>
    </div>
  </main>

  <div>
    <section>${gettingStarted}</section>
    <dcl-section></dcl-section>
  </div>

  <footer class="footer">
    <div class="container">
      <p class="text-muted text-center"><a href="https://github.com/jdelgadoalfonso/dcl-component">dcl-component</a> is maintained by <a href="https://github.com/jdelgadoalfonso">jose.delgado@aoifes.com</a>.</p>
    </div>
  </footer>
  `
})
export class Demo {
}

@NgModule({
  imports: [ BrowserModule, DCLModule ],
  declarations: [ Demo, DCLSection, DemoComponent ],
  entryComponents: [ Demo, DCLSection, DemoComponent ],
  bootstrap: [ Demo ]
})
export class AppModule { }

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
