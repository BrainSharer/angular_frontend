import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CollaborationComponent } from './pages/collaboration/collaboration.component';

const browseStateModule = () => import('./pages/browse-state/browse-state.module').then(x => x.BrowseStateModule);
const createStateModule = () => import('./pages/create-state/create-state.module').then(x => x.CreateStateModule);



const routes: Routes = [
    { path: '', loadChildren: browseStateModule },
    { path: 'browse-state', loadChildren: browseStateModule },
    { path: 'create-view', loadChildren: createStateModule },
    { path: 'home', component: HomeComponent  },
    { path: '', component: HomeComponent  },
    { path: 'collaboration', component: CollaborationComponent  },
    // otherwise redirect to home
    { path: '**', redirectTo: ''  }
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
