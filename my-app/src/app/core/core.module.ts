import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CollectionService } from './services/collection/collection.service';
import { environment } from '../../environments/environment.prod';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  declarations: [
    HomeComponent,
    PageNotFoundComponent
  ],
  exports: [
    HomeComponent,
    PageNotFoundComponent
  ],
  providers: [
    CollectionService
  ]
})
export class CoreModule {
  /**
   * @constructor make sure CoreModule is imported only by one NgModule the AppModule
   * @param parentModule
   */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
