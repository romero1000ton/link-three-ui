/**
 * @author milton.romero
 */
import {Component, Injector, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {FirebaseResponse} from '../../../../core/utils/firebase.response';
import {SessionService} from '../../../../services/session-service';

@Component({
  selector: 'app-public-login',
  templateUrl: './app-public-login.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppPublicLoginComponent {
  public isInvalidLogin: boolean;
  public isLoginForm: boolean;
  public loginForm: FormGroup;
  public userConfigurationForm: FormGroup;

  public readonly EMPTY: string = '';
  public readonly EMAIL: string = 'email';
  public readonly PASSWORD: string = 'password';
  public readonly EMAIL_ERROR: string = 'Can\'t be empty';
  public readonly PASSWORD_ERROR: string = 'Please check again';
  public readonly TITLE_LOGIN: string = 'Add your details below to get back into the app';

  private _installPromptServiceSubscription: Subscription;

  public readonly _PATH_CREATE_ACCOUNT: string = '/public/create';
  public readonly _PATH_SECURE: string = '/secure';

  constructor(private _sessionService: SessionService,
              private _formBuilder: FormBuilder,
              private _injector: Injector,
              private _router: Router) {
    this._installPromptServiceSubscription = new Subscription();
    this.isInvalidLogin = false;
    this.isLoginForm = false;

    this.loginForm = this._formBuilder.group({
      email: [this.EMPTY, Validators.required, Validators.email],
      password: [this.EMPTY, Validators.required]
    });

    this.userConfigurationForm = this._formBuilder.group({
      role: [this.EMPTY, Validators.required]
    });
  }

  public navigateToCreateAccount(): void {
    this._router.navigateByUrl(this._PATH_CREATE_ACCOUNT);
  }

  public onSubmit(): void {
      const {email, password}: { email: string, password: string } = this.loginForm.value;

      this._sessionService.login(email, password)
        .then((createResponse: FirebaseResponse) => {
          console.log('MRB: login successfull', createResponse);
          this._router.navigateByUrl(this._PATH_SECURE);
        })
        .catch(error => console.error(error));
  }
}
