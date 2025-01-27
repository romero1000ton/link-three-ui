/**
 * @author milton.romero
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {APP_SECURE_ROUTES_CONFIG} from './app-secure-routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(APP_SECURE_ROUTES_CONFIG)
  ],
  exports: [RouterModule]
})
export class AppSecureRoutingModule {
}
