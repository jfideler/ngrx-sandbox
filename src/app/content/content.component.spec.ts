import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ContentComponent } from './content.component';
import { ContentModule } from './content.module';

let component: ContentComponent;
let fixture: ComponentFixture<ContentComponent>;

xdescribe('ContentComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContentComponent],
      imports: [ContentModule],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
