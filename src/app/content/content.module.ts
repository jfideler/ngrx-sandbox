import { NgModule } from '@angular/core';
import { ContentComponent } from './content.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    FormsModule,
    HttpClientModule
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
