import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
  ],
  entryComponents: [
  ],
  exports: [
    MaterialModule,
  ]
})
export class SharingModule { }
