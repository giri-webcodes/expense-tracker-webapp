import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExpenseDialogComponent } from './view-expense-dialog.component';

describe('ViewExpenseDialogComponent', () => {
  let component: ViewExpenseDialogComponent;
  let fixture: ComponentFixture<ViewExpenseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExpenseDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewExpenseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
