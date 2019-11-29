import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewlogsPage } from './viewlogs.page';

describe('ViewlogsPage', () => {
  let component: ViewlogsPage;
  let fixture: ComponentFixture<ViewlogsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlogsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewlogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
