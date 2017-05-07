import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule} from '@angular/http';
import { FormsModule , ReactiveFormsModule} from "@angular/forms";

import { AlbumListComponent } from './album-list.component';
import { AlbumCardComponent } from './album-card.component';
import { MusicSearchComponent } from './music-search.component';
import {MusicSearchService} from "./music-search.service";
import { AlbumSearchFormComponent } from './album-search-form.component';

import { routerModule } from "./music-search.routing";
import { AlbumDetailsComponent } from './album-details.component';
import { TrackListComponent } from './track-list.component';
import { PlayerComponentComponent } from './player-component.component';

import { PlayerService } from "./player.service";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routerModule
  ],
  declarations: [
    AlbumListComponent, 
    AlbumCardComponent, 
    MusicSearchComponent, AlbumSearchFormComponent, AlbumDetailsComponent, TrackListComponent, PlayerComponentComponent
  ],
  exports: [
    MusicSearchComponent
  ],
  providers:[
    MusicSearchService,
    PlayerService
  ]
})
export class MusicSearchModule { }
