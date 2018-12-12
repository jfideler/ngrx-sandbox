import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ContentModel } from '../content.model';

@Component({
  selector: 'app-content-detail-panel',
  templateUrl: './content-detail-panel.component.html'
})
export class ContentDetailPanelComponent implements OnInit, OnChanges {

@Input() mode: string;
@Input() projectId: string;
@Input() user;
@Input() model: ContentModel;
display = false;

constructor() {}

  ngOnInit(): void {

    this.model = this.model ? this.model : new ContentModel();

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, this.model);
    this.display = (changes.model.currentValue !== null && changes.model.currentValue !== changes.model.previousValue);
  }



}
