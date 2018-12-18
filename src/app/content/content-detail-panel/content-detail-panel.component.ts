import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ContentModel, DetailEvent } from '../content.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-content-detail-panel',
  templateUrl: './content-detail-panel.component.html'
})
export class ContentDetailPanelComponent implements OnInit, OnChanges {
  @Input() mode: string;
  @Input() projectId: string;
  @Input() user;
  @Input() model: ContentModel;
  @Input() parentForm: FormGroup;
  detailForm: FormGroup = new FormGroup({});
  display = false;
  controlName = 'details';

  constructor() {}

  ngOnInit(): void {
    this.initializeData();
    // this.addOne();
  }

  initializeData() {
    this.parentForm.addControl(this.controlName, this.detailForm);
    this.model = this.model ? this.model : new ContentModel();
    if (this.model && this.model.id) {
      this.detailForm.addControl(this.model.id.toString(), new FormControl(this.model.name));
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, this.model);
    this.initializeData();
    this.display = changes.model.currentValue !== null && changes.model.currentValue !== changes.model.previousValue;
  }

  addOne() {
    console.log('ADDING');
    let newId = 0; //

    if (this.model.detailEvents.length !== 0) {
      newId = this.model.detailEvents[this.model.detailEvents.length - 1].id + 1;
    } else {
      if (this.model.id) {
        // this.detailForm.addControl(newId.toString(), this.detailForm);
      }
    }

    const event = new DetailEvent({ id: newId, description: 'another-' + newId, displayId: newId + 1 });
    // this.detailForm.addControl(event.id.toString(), this.detailForm);
    this.model.detailEvents.push(event);

    // this.detailForm.patchValue(this.model);
  }

  removeOne(id) {
    // remove
    this.model.detailEvents = this.model.detailEvents.filter(g => g.id !== id);

    // reindex
    this.model.detailEvents.map((g, i) => {
      g.id = i;
      g.displayId = i + 1;
    });
  }
}
