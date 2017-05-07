import { Component, OnInit , ElementRef } from '@angular/core';
import { PlayerService } from "./player.service";

@Component({
  selector: 'player-component',
  template: `
    <audio #audio_id controls style="width:100%;"></audio>  
  `,
  styles: []
})
export class PlayerComponentComponent implements OnInit {

  constructor(private audio: ElementRef, private playerService:PlayerService) { }

   playerControl(url){
    let audio = this.audio.nativeElement.children[0];
    if(audio.src == url)
    {
       if(audio.paused)
         audio.play();
       else
         audio.pause();
    }
    else{
      audio.src = url;
      audio.play();
    }
  }

  ngOnInit() {
    this.audio.nativeElement.children[0].volume=0.1;
    this.playerService.GetStreamUrl()
      .subscribe(url=>{this.playerControl(url);});
  }

}
