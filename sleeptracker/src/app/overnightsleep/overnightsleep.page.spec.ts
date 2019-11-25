import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OvernightsleepPage } from './overnightsleep.page';

describe('OvernightsleepPage', () => {
  let component: OvernightsleepPage;
  let fixture: ComponentFixture<OvernightsleepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvernightsleepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OvernightsleepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
