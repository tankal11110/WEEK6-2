import { PlaylistsComponent } from './playlists/playlists.component';
import { MusicSearchComponent } from './music-search/music-search.component';

import { RouterModule, Routes } from "@angular/router";

const routerConfig: Routes = [
  {path:'', redirectTo: 'music', pathMatch: 'full' },
  {path:'**', redirectTo: 'music', pathMatch:'full' }
];
export const routerModule = RouterModule.forRoot(routerConfig, {
 // enableTracing: true,
  //useHash: true
});
