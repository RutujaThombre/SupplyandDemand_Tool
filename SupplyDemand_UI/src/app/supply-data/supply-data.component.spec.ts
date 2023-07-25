import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyDataComponent } from './supply-data.component';

describe('SupplyDataComponent', () => {
  let component: SupplyDataComponent;
  let fixture: ComponentFixture<SupplyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplyDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
