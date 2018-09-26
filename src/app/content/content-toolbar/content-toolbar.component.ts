import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-toolbar',
  templateUrl: './content-toolbar.component.html'
})
export class ContentToolbarComponent implements OnInit {

@Input() mode: string;
@Input() projectId: string;

  constructor() {}

  ngOnInit(): void {
  }
}
