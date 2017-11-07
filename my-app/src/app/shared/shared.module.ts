import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MenuComponent } from './components/menu/menu.component';
import { StateDirective } from './directives/state/state.directive';
import { FormComponent } from './components/form/form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    MenuComponent,
    StateDirective,
    FormComponent
  ],
  exports: [
    MenuComponent,
    StateDirective,
    FormComponent
  ]
})
export class SharedModule { }
