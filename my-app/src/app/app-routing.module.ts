import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/components/home/home.component';
import { ListItemsComponent } from './items/containers/list-items/list-items.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { AddComponent } from './items/containers/add/add.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListItemsComponent },
  { path: 'add', component: AddComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ]
})

export class AppRoutingModule { }
