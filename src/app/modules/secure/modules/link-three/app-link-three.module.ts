/**
 * @author milton.romero
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LinkThreeEditorModule, LinkThreePreviewModule} from 'link-three';
import {SessionService} from '../../../../services/session-service';
import {AppLinkThreeComponent} from './app-link-three.component';
import {AppNavigationComponent} from './components/header-navigation/app-navigation.component';
import {AppLinksComponent} from './components/links/app-links.component';
import {AppProfileDetailsComponent} from './components/profile-details/app-profile-details.component';
import {AppLinkThreeRoutingModule} from './link-three-routes/app-link-three-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppLinkThreeRoutingModule,
    LinkThreePreviewModule,
    LinkThreeEditorModule
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
  entryComponents: [],
  providers: [SessionService]
})
export class AppLinkThreeModule {
}
