import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() selected: EventEmitter<number> = new EventEmitter();

  constructor() {}

  onSelected(event: any, id: number) {
    this.selected.emit(id);
  }
}
