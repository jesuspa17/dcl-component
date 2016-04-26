import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';

import {DCLSection} from './components/dcl-section';

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
  `,
  directives: [
    NgClass,
    DCLSection
  ]
})
export class Demo {
}

bootstrap(Demo);
