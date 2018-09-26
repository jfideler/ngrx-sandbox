import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-left-panel',
  templateUrl: './content-left-panel.component.html'
})
export class ContentLeftPanelComponent implements OnInit {

@Input() projectId: string;

  constructor() {}

  ngOnInit(): void {
  }
}
