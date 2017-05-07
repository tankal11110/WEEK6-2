import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from "./music-search.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'album-details',
  template: `
    <div class="row mt-1" *ngIf="album">
      <div class="col-md-6">
        <album-card [album]="album" style="width:100% !important;"></album-card>
      </div>
      <div class="col-md-6">
        <h2 class="">Utwory</h2>
        <track-list [tracks]="album.tracks.items"></track-list>
      </div>
    </div>
  `,
  styles: []
})
export class AlbumDetailsComponent implements OnInit {

  album;
  constructor(private musicService: MusicSearchService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activeRoute.snapshot.params['id'];
    this.musicService.getAlbum(id).subscribe(album => {
      this.album = album;
    });
  }

}
