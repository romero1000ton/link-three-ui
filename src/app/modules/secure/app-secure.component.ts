/**
 * @author milton.romero
 */
import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-secure-root',
  templateUrl: './app-secure.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppSecureComponent implements OnInit, OnDestroy {
  constructor() {
  }

  public ngOnInit(): void {
    this._initialize();
  }

  public ngOnDestroy(): void {
    this._finalize();
  }

  private _initialize(): void {
  }

  private _finalize(): void {
  }
}
