import { PlaylistsComponent } from './playlists.component';
import { PlaylistDetailComponent } from './playlist-detail.component';
import { PlaylistFormComponent } from './playlist-form.component';

import { RouterModule, Routes } from "@angular/router";

const routerConfig: Routes = [
  {path:'playlists', component: PlaylistsComponent, 
    children:[
      {path:'', component: PlaylistDetailComponent },
      {path:'new', component: PlaylistFormComponent },
      {path:':id', component: PlaylistDetailComponent },
      {path:':id/edit', component: PlaylistFormComponent }
    ]
  }
];
export const routerModule = RouterModule.forRoot(routerConfig);
