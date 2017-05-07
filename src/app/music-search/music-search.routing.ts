import { MusicSearchComponent } from './music-search.component';
import { RouterModule, Routes } from "@angular/router";
import { AlbumDetailsComponent } from './album-details.component';

const routerConfig: Routes = [
   {path:'music', component: MusicSearchComponent },
   {path:'music/album/:id', component: AlbumDetailsComponent }

];
export const routerModule = RouterModule.forRoot(routerConfig);
