import { Component, ViewEncapsulation, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit, OnChanges {

  aboutForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    this.aboutForm = this.createForm();
  }

  createForm(): FormGroup {
    const config = this.getFormFieldConfig();

    const form = this.formBuilder.group(config);

    return form;
  }

  getFormFieldConfig() {
    const MAX_LENGTH = 75;

    const config = {
      middleName: [
        '',
        [
          Validators.maxLength(MAX_LENGTH)
        ]
      ]
    };

    return config;
  }
}
