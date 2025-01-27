import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {LinkThreeCardLinksWrapper, LinkThreeCardWrapper, PayloadService} from 'link-three-api';
// TODO: improve use another lib commons core

@Component({
  selector: 'link-three-editor-view',
  templateUrl: 'link-three-editor-view.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkThreeEditorViewComponent {
  @Input() public linkCardsWrapper!: LinkThreeCardLinksWrapper;
  // TODO: We need improve using some structure to handler
  @Input() public smartComponent!: any;


  constructor(private _payloadService: PayloadService) {
  }

  public onCreateTask(): void {
    // TODO We need customize this this
    const cardTemplate: LinkThreeCardWrapper = {
      id: 'Nro.',
      platform: 'Git Hub',
      link: 'www.google.com'
    };

    this._payloadService.sendData(cardTemplate);
  }
}
