/**
 * @author milton.romero
 */
import {Routes} from '@angular/router';
import {AppLinkThreeComponent} from '../app-link-three.component';
import {AppLinksComponent} from '../components/links/app-links.component';
import {AppProfileDetailsComponent} from '../components/profile-details/app-profile-details.component';

export const LINK_THREE_ROUTES_CONFIG: Routes = [
  {path: '', redirectTo: 'links'},
  {
    path: '', component: AppLinkThreeComponent,
    children: [
      {
        path: 'links',
        component: AppLinksComponent
      },
      {
        path: 'profile',
        component: AppProfileDetailsComponent
      }
    ]
  },
];
