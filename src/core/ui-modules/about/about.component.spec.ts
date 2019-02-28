import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { BpMaterialModule } from '../../bp-material';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { RouteDataService } from '..';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          AboutComponent
        ],
        imports: [
          BpMaterialModule,
          ReactiveFormsModule,
          BrowserAnimationsModule,
          RouterTestingModule
        ],
        providers: [
          RouteDataService
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    component.aboutForm = new FormGroup({});
    fixture.detectChanges();
  });

  describe('component', () => {

      it('should mount', () => {

        component.aboutForm = new FormGroup({});
        expect(component).toBeTruthy();
      });
  });

});
