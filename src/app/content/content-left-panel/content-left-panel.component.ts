import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-left-panel',
  templateUrl: './content-left-panel.component.html'
})
export class ContentLeftPanelComponent implements OnInit {

@Input() projectId: string;
@Output() select: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {

  }

  getDocs(choice: number) {
    this.select.emit(choice);
  }
}
