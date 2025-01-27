/**
 * @author milton.romero
 */

import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {FirebaseUserResponse} from '../core/utils/firebase-user.response';
import {FirebaseResponse} from '../core/utils/firebase.response';

@Injectable()
export class SessionService {
  constructor(private _angularFireAuthentication: AngularFireAuth) {
  }

  public async login(email: string, password: string): Promise<FirebaseResponse> {
    return await this._angularFireAuthentication.signInWithEmailAndPassword(email, password);
  }

  public async register(email: string, password: string): Promise<FirebaseResponse> {
    return await this._angularFireAuthentication.createUserWithEmailAndPassword(email, password);
  }

  public async logout(): Promise<void> {
    return await this._angularFireAuthentication.signOut();
  }

  public getUser(): Observable<FirebaseUserResponse | null> {
    return this._angularFireAuthentication.user;
  }
}
