import { NgModule } from '@angular/core';
import { ContentComponent } from './content.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContentLeftPanelComponent } from './content-left-panel/content-left-panel.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ContentToolbarComponent } from './content-toolbar/content-toolbar.component';
import { ContentDataTableComponent } from './content-data-table/content-data-table.component';
import { ContentDetailPanelComponent } from './content-detail-panel/content-detail-panel.component';

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    ContentComponent,
    ContentLeftPanelComponent,
    ContentToolbarComponent,
    ContentDataTableComponent,
    ContentDetailPanelComponent
  ],
  providers: [
  ],
  exports: [ContentComponent],
  bootstrap: []
})
export class ContentModule {}
