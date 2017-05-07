import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class PlayerService {

  constructor() { }

  url;

  streamUrl =  new Subject();

  GetStreamUrl(){
  	return this.streamUrl.startWith(this.url);
  }


  play(track){
  	this.url=track.preview_url;
  	this.streamUrl.next(track.preview_url);

  }	

}
