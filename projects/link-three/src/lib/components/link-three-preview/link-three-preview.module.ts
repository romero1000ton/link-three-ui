/**
 * @author milton.romero
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveComponentModule} from '@ngrx/component';
import {LinkThreePreviewContainerModule} from 'link-three-core';
import {LinkThreePreviewViewModule} from 'link-three-view';
import {LinkThreePreviewComponent} from './link-three-preview.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveComponentModule,
    LinkThreePreviewContainerModule,
    LinkThreePreviewViewModule
  ],
  declarations: [
    LinkThreePreviewComponent
  ],
  exports: [
    LinkThreePreviewComponent
  ]
})
export class LinkThreePreviewModule {
}
