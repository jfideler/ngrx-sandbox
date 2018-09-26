import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-data-table',
  templateUrl: './content-data-table.component.html'
})
export class ContentDataTableComponent implements OnInit {

@Input() mode: string;
@Input() projectId: string;

  constructor() {}

  ngOnInit(): void {
  }
}
