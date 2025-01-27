/**
 * @author milton.romero
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {FirebaseResponse} from '../../../../core/utils/firebase.response';
import {SessionService} from '../../../../services/session-service';

@Component({
  selector: 'app-public-create-account',
  templateUrl: './app-public-create-account.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppPublicCreateAccountComponent {
  public isInvalidLogin: boolean;
  public isLoginForm: boolean;
  public createAccountForm: FormGroup;
  public userConfigurationForm: FormGroup;

  public readonly EMPTY: string = '';
  public readonly EMAIL: string = 'email';
  public readonly PASSWORD: string = 'password';
  public readonly CONFIRM_PASSWORD: string = 'confirmPassword';
  public readonly EMAIL_ERROR: string = 'Can\'t be empty';
  public readonly PASSWORD_ERROR: string = 'Please check again';
  public readonly TITLE_CREATE_ACCOUNT: string = 'Let\'s get you started sharing you links!';

  private _installPromptServiceSubscription: Subscription;

  public readonly _PATH_LOGIN: string = '/public/login';
  public readonly _PATH_SECURE: string = '/secure';

  constructor(private _sessionService: SessionService,
              private _formBuilder: FormBuilder,
              private _router: Router) {
    this._installPromptServiceSubscription = new Subscription();
    this.isInvalidLogin = false;
    this.isLoginForm = false;

    this.createAccountForm = this._formBuilder.group({
      email: [this.EMPTY, Validators.required, Validators.email],
      password: [this.EMPTY, Validators.required],
      confirmPassword: [this.EMPTY, Validators.required]
    }, {validator: this._checkPasswords});

    this.userConfigurationForm = this._formBuilder.group({
      role: [this.EMPTY, Validators.required]
    });
  }

  public navigateToLogin(): void {
    this._router.navigateByUrl(this._PATH_LOGIN);
  }

  public onSubmit(): void {
    const passwordMatch: boolean = this.createAccountForm.controls.password.value === this.createAccountForm.controls.confirmPassword.value;

    if (passwordMatch) {
      const {email, password}: { email: string, password: string } = this.createAccountForm.value;

      this._sessionService.register(email, password)
        .then((createResponse: FirebaseResponse) => {
          console.log('MRB: response create', createResponse);
          this._router.navigateByUrl(this._PATH_SECURE);
        })
        .catch(error => console.error(error));
    }
  }

  private _checkPasswords(group: FormGroup): { notSame: boolean } | null {
    const password: string = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : {notSame: true};
  }
}
