/**
 * @author milton.romero
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LINK_THREE_ROUTES_CONFIG} from './app-link-three-routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LINK_THREE_ROUTES_CONFIG)
  ],
  exports: [RouterModule]
})
export class AppLinkThreeRoutingModule {
}
