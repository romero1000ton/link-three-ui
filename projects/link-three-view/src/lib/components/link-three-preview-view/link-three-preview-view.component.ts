import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'link-three-preview-view',
  templateUrl: 'link-three-preview-view.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkThreePreviewViewComponent implements OnInit {

  constructor() {
  }

  public ngOnInit(): void {
  }

}
