import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PlaylistsService } from "./playlists.service";

@Component({
  selector: 'playlist-form',
  template: `
      <div   *ngIf="playlist">

        <form #formRef="ngForm" novalidate="true" (ngSubmit)="save(formRef, playlist)">

          <div class="form-group">
              <label>Name:</label>
              <input type="text" #nameRef = "ngModel" [(ngModel)]="playlist.name" name="name" class="form-control" required minlength="3">
              <div class="form-group has-error" *ngIf="nameRef.touched || nameRef.dirty || formRef.submitted">
                <div class="form-control-feedback" style="width:100%; position:relative;" *ngIf="nameRef.errors?.required">To pole jest wymagane</div>
                <div class="form-control-feedback" style="width:100%; position:relative;" *ngIf="nameRef.errors?.minlength">To pole jest wymagane przynajmniej {{nameRef.errors.minlength.requiredLength}} znaki</div>
              </div>
          </div>
          <div class="form-group">
              <label>Tracks:</label>
              <textarea #descriptionRef="ngModel" [(ngModel)]="playlist.description"  name="description" class="form-control"></textarea>
          </div>


          <div class="form-group">
              <label>Kategoria:</label>
              <select class="form-control" [(ngModel)] = "playlist.category" name="category">
                  <option *ngFor="let category of categories" [value]="category">{{category}}</option>
              </select>
          </div>

          <!--<div class="form-group">
              <label>Kategoria:</label>
              <div *ngFor="let category of categories">
                  <label class="form-check-input">
                      <input type="radio" [(ngModel)]="playlist.category" name="category" [value]="category">{{category}}
                  </label>
              </div>
          </div>-->

          <div class="form-group">
              <label>Kolor:</label>
              <input type="color" [(ngModel)]="playlist.color" name="color" class="form-control">
          </div>
          
          <div class="form-group">
              <label>
              <input type="checkbox" [(ngModel)]="playlist.favourite" name="favourite">
              Favourite</label>
          </div>
          <div class="form-group">
              <button class="btn btn-success float-xs-right" type="submit">Save</button>
          </div>

        </form>
        
      </div>
  `,
  styles: [`
   input.ng-invalid.ng-dirty, 
   textarea.ng-invalid.ng-dirty,
   input.ng-invalid.ng-touched, 
   textarea.ng-invalid.ng-touched
   {
     border: 1px red solid !important;
   } 
  `]
})
export class PlaylistFormComponent implements OnInit {

  categories = [
    "Filmowa",
    "Rockowa",
    "Inne"
  ];
  

  playlist;


  save(valid, playlist){
      console.log(valid);
      if (!valid.valid){
          return;
      }
     this.playlistsService.savePlaylist(playlist);
     this.router.navigate(['playlist', playlist.id]);
  }

  constructor(private activeRoute: ActivatedRoute,
              private playlistsService: PlaylistsService,
              private router: Router) {
    console.log(this.playlist);
  }

  ngOnInit() {

    this.activeRoute.params.subscribe(params => {
     
      let id = parseInt(params['id']);
     
      if (id){
        let playlist = this.playlistsService.getPlaylist(id);
        this.playlist = Object.assign({}, playlist);
      
      }else if (!this.playlist){
          this.playlist = this.playlistsService.createPlaylist();

      }

      console.log("form");
      
    });   

    

  }
  

}
