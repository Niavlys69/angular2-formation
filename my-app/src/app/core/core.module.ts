import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CollectionService } from './services/collection/collection.service';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
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
