/**
 * @author milton.romero
 */
import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-link-three-root',
  templateUrl: './app-link-three.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppLinkThreeComponent implements OnInit, OnDestroy {
  public theme: string;

  private _unsubscribeSubject: Subject<void>;


  constructor() {
    this._unsubscribeSubject = new Subject<void>();
    this.theme = 'default';
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
    this._unsubscribeSubject.next();
    this._unsubscribeSubject.complete();
  }
}
