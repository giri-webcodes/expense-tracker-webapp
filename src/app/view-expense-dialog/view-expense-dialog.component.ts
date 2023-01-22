import { Component,Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Expense } from '../expenselist';

@Component({
  selector: 'app-view-expense-dialog',
  templateUrl: './view-expense-dialog.component.html',
  styleUrls: ['./view-expense-dialog.component.css']
})
export class ViewExpenseDialogComponent{
  
  constructor(@Inject(MAT_DIALOG_DATA) public expense:Expense) {    
  }

}
