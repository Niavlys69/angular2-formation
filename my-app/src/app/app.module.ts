import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
  constructor(router: Router) {
    if (!environment.production) {
      // Permet d'afficher l'ordre des routes dans la console
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
  }
}
