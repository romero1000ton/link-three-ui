/**
 * @author milton.romero
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveComponentModule} from '@ngrx/component';
import {LinkThreeEditorContainerModule} from 'link-three-core';
import {LinkThreeEditorViewModule} from 'link-three-view';
import {LinkThreeEditorComponent} from './link-three-editor.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveComponentModule,
    LinkThreeEditorContainerModule,
    LinkThreeEditorViewModule
  ],
  declarations: [
    LinkThreeEditorComponent
  ],
  exports: [
    LinkThreeEditorComponent
  ]
})
export class LinkThreeEditorModule {
}
