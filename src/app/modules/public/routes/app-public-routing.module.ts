/**
 * @author milton.romero
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {APP_PUBLIC_ROUTES_CONFIG} from './app-public-routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(APP_PUBLIC_ROUTES_CONFIG)
  ],
  exports: [RouterModule]
})
export class AppPublicRoutingModule {
}
