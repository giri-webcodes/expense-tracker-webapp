import { Component,OnInit } from '@angular/core';
import { expenseList } from '../expenselist';
import { monthList } from '../expenselist';
import { yearList } from '../expenselist';
import { Expense } from '../expenselist';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})

export class ExpenseListComponent implements OnInit {
   expenseList=expenseList;
   monthList=monthList;
   yearList=yearList;
   totalExpense:number=0;
   filterList:Expense[]=[];

   public selectedMonth:number=0;
   public selectedYear:number=0;

   ngOnInit(){    
    this.selectedMonth=new Date().getMonth()+1;
    this.selectedYear=new Date().getFullYear();       
   }

      
   public getData(){
            
    this.filterList=[];
    this.expenseList=expenseList;
    this.totalExpense=0;
    
    this.expenseList.forEach(x=>{
      var dt = new Date(x.date);            
      if(Number(dt.getMonth()+1) == this.selectedMonth && dt.getFullYear() == this.selectedYear)
      {                
        this.filterList.push(x);  
        this.totalExpense=this.totalExpense+x.amount;      
      }      
    });

    this.expenseList=this.filterList;     
   }      
}
