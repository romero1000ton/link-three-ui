/**
 * @author milton.romero
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {SessionService} from '../../../../../../services/session-service';

@Component({
  selector: 'app-navigation',
  templateUrl: './app-navigation.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppNavigationComponent {
  constructor(private _sessionService: SessionService,
              private _route: Router) {

  }

  public logOut(): void {
    this._sessionService.logout().then(() => {
      console.info('[LOG OUT] Success');
      this._route.navigateByUrl('/public');
    }).catch(err => console.error('[LOG] Error logout', err));
  }
}
