import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneDetailContainerComponent } from './phone-detail-container.component';

describe('PhoneDetailContainerComponent', () => {
  let component: PhoneDetailContainerComponent;
  let fixture: ComponentFixture<PhoneDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneDetailContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
