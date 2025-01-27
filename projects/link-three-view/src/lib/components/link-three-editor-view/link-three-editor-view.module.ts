import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LinkThreeCardViewComponent} from './components/link-three-card-view/link-three-card-view.component';
import {LinkThreeEditorViewComponent} from './link-three-editor-view.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LinkThreeCardViewComponent,
    LinkThreeEditorViewComponent
  ],
  exports: [
    LinkThreeEditorViewComponent
  ]
})
export class LinkThreeEditorViewModule {
}
