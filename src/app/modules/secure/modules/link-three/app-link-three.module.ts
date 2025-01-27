/**
 * @author milton.romero
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AppLinkThreeComponent} from './app-link-three.component';
import {AppNavigationComponent} from './components/header-navigation/app-navigation.component';
import {AppLinksComponent} from './components/links/app-links.component';
import {AppProfileDetailsComponent} from './components/profile-details/app-profile-details.component';
import {AppLinkThreeRoutingModule} from './link-three-routes/app-link-three-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppLinkThreeRoutingModule
  ],
  exports: [
    AppLinkThreeComponent
  ],
  declarations: [
    AppLinkThreeComponent,
    AppNavigationComponent,
    AppLinksComponent,
    AppProfileDetailsComponent
  ],
  entryComponents: []
})
export class AppLinkThreeModule {
}
