import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContentComponent } from './content/content.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContentToolbarComponent } from './content/content-toolbar/content-toolbar.component';
import { ContentLeftPanelComponent } from './content/content-left-panel/content-left-panel.component';
import { ContentDataTableComponent } from './content/content-data-table/content-data-table.component';
import { ContentDetailPanelComponent } from './content/content-detail-panel/content-detail-panel.component';
import { SharedModule } from './shared/shared.module';
import { Store, StateObservable, StoreModule} from '@ngrx/store';
import { reducers } from '../../src/app/+state/reducers';

export class DummyStore {
  select: () => {};
}
export class DummyReducerManager {
  addFeatures: () => {};
}

let fixture: ComponentFixture<AppComponent>;
let store: Store<any> ;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('app', reducers),
      ],
      declarations: [
        AppComponent,
        NavBarComponent,
        ContentToolbarComponent,
        ContentComponent,
        ContentLeftPanelComponent,
        ContentDataTableComponent,
        ContentDetailPanelComponent
      ],
      providers: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    store = TestBed.get(Store);
    // fixture.detectChanges();
  });

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'sandbox'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('sandbox-app');
  }));

  it('should render title in a h1 tag', async(() => {

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(':The Agony & ngrx-tasy:');
  }));
});
