import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <h1>Olar {{ pageTitle }}</h1>
    </div>
  `,
})
export class AppComponent {
  pageTitle: string = 'Acme';
}
