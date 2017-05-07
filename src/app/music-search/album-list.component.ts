import { Component, OnInit } from '@angular/core';
import {MusicSearchService} from "./music-search.service";


@Component({
  selector: 'album-list',
  template: `
     
    <h4>Albumy</h4>
    <div class="thumbnail">
      <album-card [album]="album" 
                  [routerLink] = "['album', album.id]"
                  *ngFor = "let album of albums | async" class="thumbnail"></album-card>
      
    </div>
  `,
  styles: []
})
export class AlbumListComponent implements OnInit {

  albums;
  constructor(private musicSearch: MusicSearchService ) {

   }

  ngOnInit() {
    
    this.albums = this.musicSearch.getAlbumsStream();

   // this.musicSearch.getAlbumsStream()
   // .subscribe((albums)=>{
   //   this.albums = albums;
  //  });

  }
  
}
