import { NgModule } from '@angular/core';
import { ContentComponent } from './content.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [
    ContentComponent
  ],
  providers: [
  ],
  exports: [ContentComponent],
  bootstrap: []
})
export class ContentModule {}
