import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'album-card',
  template: `
    <img class="img-fluid" [src]="image.url">
    <div class="card-img-overlay">
    <h5>{{album.name}}</h5>
  `,
  styles: [`
    :host(){
      width:33%;
      overflow: hidden;
      display: inline-block;
      position: relative;
    }
    :host():hover .card-img-overlay{
      top:100%;
    }
    .card-img-overlay{
      background: rgba(0,0,0, 0.8);
      top: 70%;
      color: #fff;
      font-size: 1em !important;
      position: absolute;
      width:100%;
      height:100%;
    }
  `]
})
export class AlbumCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('album')
  set setAlbum(album){
    this.album = album;
    this.image = album.images[0];
  }
  album;
  image;

}
