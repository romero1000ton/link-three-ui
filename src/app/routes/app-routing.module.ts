/**
 * @author milton.romero
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {APP_ROUTES_CONFIG} from './app-routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES_CONFIG, {useHash: false})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
