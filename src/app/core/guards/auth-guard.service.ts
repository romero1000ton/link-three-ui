/**
 * @author milton.romero
 */
import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  private readonly _SECURE_PATH: string = '/secure';

  constructor(private _router: Router) {
  }

  public canActivate(): boolean {
    const isAuthenticated: boolean = false;

    if (isAuthenticated) {
      this._router.navigate([this._SECURE_PATH]);
    }

    return true;
  }
}
