/**
 * @author milton.romero
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AppSecureComponent} from './app-secure.component';
import {AppSecureRoutingModule} from './routes/app-secure-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppSecureRoutingModule
  ],
  declarations: [
    AppSecureComponent
  ]
})
export class AppSecureModule {
}
