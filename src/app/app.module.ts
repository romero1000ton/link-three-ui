import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {BrowserModule} from '@angular/platform-browser';
import {LinkThreeApiModule} from 'link-three-api';
import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {AuthGuardService} from './core/guards/auth-guard.service';
import {AppRoutingModule} from './routes/app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    LinkThreeApiModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
