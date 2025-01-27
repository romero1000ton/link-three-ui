/**
 * @author milton.romero
 */
import {Routes} from '@angular/router';
import {AppSecureComponent} from '../app-secure.component';

export const APP_SECURE_ROUTES_CONFIG: Routes = [
  {
    path: '',
    component: AppSecureComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'link-three'},
      {
        path: 'link-three',
        loadChildren: () => import('../modules/link-three/app-link-three.module').then(module => module.AppLinkThreeModule)
      }
    ]
  }
];
