import { Component } from '@angular/core';
import { expenseList } from '../expenselist';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent {
   expenseList=expenseList;
 
}
