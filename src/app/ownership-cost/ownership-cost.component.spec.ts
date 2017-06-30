import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnershipCostComponent } from './ownership-cost.component';

describe('OwnershipCostComponent', () => {
  let component: OwnershipCostComponent;
  let fixture: ComponentFixture<OwnershipCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnershipCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnershipCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
