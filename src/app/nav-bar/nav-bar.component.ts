import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent  {
  @Input() username: string;
  title = 'sandbox';

  constructor() {}

}
