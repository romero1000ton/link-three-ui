import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'link-three-preview-container',
  templateUrl: 'link-three-preview-container.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkThreePreviewContainerComponent {

  constructor() {
  }
}
