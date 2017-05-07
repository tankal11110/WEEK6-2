import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PlaylistsService } from "./playlists.service"

@Component({
  selector: 'playlist-detail',
  template: `
    <div *ngIf = "!playlist">
      <p>Wybierz playliste</p>
    </div>
    <div *ngIf = "playlist">
      <h3>{{playlist.name}}</h3>
      <div class="form-group">
          <button 
          class="btn btn-default float-xs-right" 
          [routerLink]="['edit']">Edytuj</button>
      </div>
    </div>
  `,
  styles: []
})
export class PlaylistDetailComponent implements OnInit {

  playlist;

  edit(playlist){
 //   this.router.navigate(['playlist', playlist.id, 'edit']);
  }

  constructor(private activeRoute: ActivatedRoute,
              private playlistsSevice: PlaylistsService,
              private router: Router) { 
  }
  ngOnInit() {

    this.activeRoute.params.subscribe(params => {
      let id = parseInt(params['id']);
      if (id){
        this.playlist = this.playlistsSevice.getPlaylist(id);
      
      }
    });  

    console.log('detail');
  }

}
