import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { BpMaterialModule } from 'src/core/bp-material';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    // CommonModule,
    BpMaterialModule,
    // FlexLayoutModule,
    // TranslateModule.forChild(),
    ReactiveFormsModule,
    // TextMaskModule
  ],
  declarations: [
    AboutComponent
  ],
  exports: [
    AboutComponent
  ],
  providers: [
    // ValidationUtil
  ]
})
export class AboutModule { }
