/**
 * @author milton.romero
 */
import {Routes} from '@angular/router';
import {AuthGuardService} from '../../../core/guards/auth-guard.service';
import {AppPublicComponent} from '../app-public.component';
import {AppPublicCreateAccountComponent} from '../components/create-account/app-public-create-account.component';
import {AppPublicLoginComponent} from '../components/login/app-public-login.component';

export const APP_PUBLIC_ROUTES_CONFIG: Routes = [
  {
    path: '',
    component: AppPublicComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'login'},
      {path: 'login', component: AppPublicLoginComponent, canActivate: [AuthGuardService]},
      {path: 'create', component: AppPublicCreateAccountComponent}
    ]
  }
];
