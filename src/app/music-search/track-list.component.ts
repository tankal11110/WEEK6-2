import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from "./player.service";

@Component({
  selector: 'track-list',
  template: `
        
     <table class="table table-striped"> 
        <thead> 
            <tr> 
                <th>#</th> 
                <th>Nazwa</th>  
                <th>Wykonawca</th> 
                <th>Play</th>
            </tr> 
        </thead> 
        <tbody> 
            <tr *ngFor="let track of tracks" (click)="play(track)"> 
                <td>{{track.number}}</td> 
                <td>{{track.name}}</td>  
                <td>{{track.artists[0].name}}</td> 
                <td></td>
            </tr>
        </tbody>
      </table>
      <player-component></player-component>
  `,
  styles: []
})
export class TrackListComponent implements OnInit {

  @Input()
  tracks;

 

  play(track){
      console.log("play1");
    this.playerService.play(track);
      
  }
  constructor( private playerService:PlayerService) { }

  ngOnInit() {
  }

}
