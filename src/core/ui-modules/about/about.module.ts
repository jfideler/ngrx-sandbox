import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TextMaskModule } from 'angular2-text-mask';
import { BpMaterialModule } from '../../bp-material';
import { ValidationUtil } from '../../validation';



@NgModule({
  imports: [
    CommonModule,
    BpMaterialModule,
    FlexLayoutModule,
    // TranslateModule.forChild(),
    ReactiveFormsModule,
    TextMaskModule
  ],
  declarations: [
    AboutComponent
  ],
  exports: [
    AboutComponent
  ],
  providers: [
    ValidationUtil
  ]
})
export class AboutModule { }
