import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css'],
  styles: [
    `
      h1 {
        color: blue;
      }
    `,
  ],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = 'Olar';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  ngOnInit(): void {}
}
