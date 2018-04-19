import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneListContainerComponent } from './phone-list-container.component';

describe('PhoneListContainerComponent', () => {
  let component: PhoneListContainerComponent;
  let fixture: ComponentFixture<PhoneListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
