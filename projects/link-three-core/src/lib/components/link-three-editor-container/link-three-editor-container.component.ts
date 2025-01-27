import {AfterViewInit, ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {LinkThreeCardLinksWrapper, PayloadService} from 'link-three-api';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'link-three-editor-container',
  templateUrl: 'link-three-editor-container.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkThreeEditorContainerComponent implements AfterViewInit {

  public linkThreeCardWrapper$!: Observable<LinkThreeCardLinksWrapper | undefined>;

  private _unsubscribeSubject: Subject<void>;

  constructor(private _payloadService: PayloadService) {
    this._unsubscribeSubject = new Subject<void>();
  }

  public ngAfterViewInit(): void {
    this._initialize();
  }

  private _initialize(): void {
    this._listenEditView();
  }


  // TODO: add logic to save data in state management
  private _listenEditView(): void {
    this._payloadService.listenData().pipe(
      takeUntil(this._unsubscribeSubject),
    ).subscribe((data: any) => {

    });
  }
}
