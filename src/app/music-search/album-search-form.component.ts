import { Component, OnInit } from '@angular/core';
import {MusicSearchService} from "./music-search.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'album-search-form',
  template: `
   <form (ngSubmit) = "search(query)">
    <div class="input-group">
      <input type="text"name="query" [(ngModel)]="query" class="form-control" placeholder="Slowa kluczowe">
      <span class="input-group-btn">
        <button type="submit" class="btn btn-outline-primary">Szykaj</button>
      </span>
    </div>
   </form>
  `,
  styles: []
})
export class AlbumSearchFormComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private musicSearch: MusicSearchService) { 
      this.searchForm = new FormGroup({
        'query': new FormControl('batman')
      });

      
  }

  ngOnInit() {
  }

  search(query){
    this.musicSearch.search(query);
  }

}
