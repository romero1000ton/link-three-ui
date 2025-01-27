import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {LinkThreeCardWrapper} from 'link-three-api';

@Component({
  selector: 'link-three-card-view',
  templateUrl: 'link-three-card-view.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkThreeCardViewComponent implements OnInit {
  @Input() public card!: LinkThreeCardWrapper;

  constructor() {
  }

  public ngOnInit(): void {
  }
}
