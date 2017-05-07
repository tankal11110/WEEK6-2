import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <h3>
          <a routerLink="/" class="navbar-brand">Muzyka z Angular2</a>
        </h3>
        
        <ul class="nav navbar-nav navbar-right">
          <li class="nav-item">
            <a class="nav-link" routerLink="/music">Szykaj Muzyki</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/playlists">Twoje Playlisty</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: []
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
