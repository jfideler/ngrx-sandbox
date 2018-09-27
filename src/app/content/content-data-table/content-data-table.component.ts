import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentModel } from '../content.model';

@Component({
  selector: 'app-content-data-table',
  templateUrl: './content-data-table.component.html'
})
export class ContentDataTableComponent {
  @Input() mode: string;
  @Input() projectId: string;
  @Input() docs$: Observable<ContentModel[]>;

  constructor() {}

  onSelected(event: any, id: number) {
    console.log('selected ', id);
  }
}
