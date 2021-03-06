import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { ListItemsComponent } from './items/containers/list-items/list-items.component';
import { AddComponent } from './items/containers/add/add.component';

const appRoutes: Routes = [
  { path: 'items', loadChildren: './items/items.module#ItemsModule' },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { preloadingStrategy: PreloadAllModules }
    )
  ]
})

export class AppRoutingModule { }
