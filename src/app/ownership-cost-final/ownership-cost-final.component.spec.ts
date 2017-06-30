import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnershipCostFinalComponent } from './ownership-cost-final.component';

describe('OwnershipCostFinalComponent', () => {
  let component: OwnershipCostFinalComponent;
  let fixture: ComponentFixture<OwnershipCostFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnershipCostFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnershipCostFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
