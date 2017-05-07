import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable, Subject } from "rxjs";

@Injectable()
export class MusicSearchService {

  albums = [];
  constructor(private http: Http) { 
    this.search('batman');
  }
  albumStream = new Subject;

  getAlbumsStream(){
    
    let data = Observable.from(this.albumStream).startWith(this.albums);
    return data;
  }

  getAlbum(id){
    let url =` https://api.spotify.com/v1/albums/${id} `;
    return this.http.get(url)
    .map((response:Response)=> response.json() );
  }

  search(query){

    let url =` https://api.spotify.com/v1/search?type=album&market=PL&query=${query}`
   
    // this.http.get(url).subscribe((response)=>{
    //   let data = response.json();
    //   let albums = data.albums.items;
    //   this.albums = albums;
    //   this.albumStream.next(this.albums);
    // });

    this.http.get(url)
    .map((response:Response)=>{
      let data = response.json();
      return data.albums.items;  
    })
    .do(albums => {this.albums = albums})
    .subscribe(albums => {
      this.albumStream.next(this.albums);
    });

 }

}
