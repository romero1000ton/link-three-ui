/**
 * @author milton.romero
 */
import {Routes} from '@angular/router';

export const APP_ROUTES_CONFIG: Routes = [
  {path: '', redirectTo: 'public', pathMatch: 'full'},
  {path: 'public', loadChildren: () => import('../modules/public/app-public.module').then(module => module.AppPublicModule)},
  {
    path: 'secure',
    loadChildren: () => import('../modules/secure/app-secure.module').then(module => module.AppSecureModule)
  },
  {path: '**', redirectTo: 'secure', pathMatch: 'full'}
];
