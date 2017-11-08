import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ListItemsComponent } from './containers/list-items/list-items.component';
import { AddComponent } from './containers/add/add.component';

const itemsRoutes: Routes = [
  { path: 'list', component: ListItemsComponent },
  { path: 'add', component: AddComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      itemsRoutes
    )
  ]
})
export class ItemsRoutingModule { }
