import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CollaborationComponent } from './pages/docs/collaboration.component';
import { SegmentationComponent } from './pages/docs/segmentation.component';

const browseStateModule = () => import('./pages/browse-state/browse-state.module').then(x => x.BrowseStateModule);


const routes: Routes = [
    { path: '', loadChildren: browseStateModule },
    { path: 'browse-state', loadChildren: browseStateModule },
    { path: 'home', component: HomeComponent  },
    { path: '', component: HomeComponent  },
    { path: 'collaboration', component: CollaborationComponent  },
    { path: 'segmentation', component: SegmentationComponent  },
    // otherwise redirect to home
    { path: '**', redirectTo: ''  }
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
