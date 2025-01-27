/**
 * @author milton.romero
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SessionService} from '../../services/session-service';
import {AppPublicComponent} from './app-public.component';
import {AppPublicCreateAccountComponent} from './components/create-account/app-public-create-account.component';
import {AppPublicLoginComponent} from './components/login/app-public-login.component';
import {AppPublicRoutingModule} from './routes/app-public-routing.module';

@NgModule({
  imports: [
    AppPublicRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppPublicComponent,
    AppPublicLoginComponent,
    AppPublicCreateAccountComponent
  ],
  providers: [SessionService]
})
export class AppPublicModule {
}
