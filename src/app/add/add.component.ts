import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Expense, ExpenseType } from '../expenselist';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  pageIndex: Number = 0;
  selectedMonth: Number = 0;
  selectedYear: Number = 0;
  filteredOptions: Observable<ExpenseType[]>;
  expenseTypeList:ExpenseType[]=[];

  expenseForm = new FormGroup({
    expense: new FormControl(''),
    amount: new FormControl(''),
    date: new FormControl(formatDate(new Date(),'yyyy-MM-dd','en')),
    comment: new FormControl('')
  });

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      this.pageIndex = params['pageIndex'];
      this.selectedMonth = params['month'];
      this.selectedYear = params['year'];
    });

    if(localStorage.getItem('expTypeList') !== null){
      let list:ExpenseType[]= JSON.parse(localStorage.getItem('expTypeList')!);      
       this.expenseTypeList=list;
     }

    //autocomplete
    this.filteredOptions=this.expenseForm.controls.expense.valueChanges.pipe(
      startWith(''),
      map(value=>this._filter(value || '')),
    );
  }

  private _filter(value: string): ExpenseType[]{  
    let filterValue = value.toLowerCase();   
    return this.expenseTypeList.filter(option=>option.expense_type.toLowerCase().includes(filterValue));
  }

  displayFunc(expenseType:ExpenseType){    
return expenseType && expenseType.expense_type ? expenseType.expense_type:'';
  }

  onSubmit() {

    let array:Expense[]=[];
    if (localStorage.getItem("expList") !== null) {
      array = JSON.parse(localStorage.getItem('expList')!);    
    }

    var count =array.length+1;
    var found =array.findIndex(e=>e.id===count);
    if(found != -1){
      count = count +1;
    }
    var etype=<ExpenseType><unknown>this.expenseForm.value.expense;
    
    array.push({id:count,expense:etype.expense_type.trim(),amount:parseFloat(this.expenseForm.value.amount!),
      date:new Date(this.expenseForm.value.date!),comment:this.expenseForm.value.comment!.trim()});

      localStorage.setItem('expList',JSON.stringify(array));

      var alert = document.getElementById("alert")!;     
      alert.style.display = 'block';          
setTimeout(function (){
  alert.style.display = 'none'; 
},2000);
this.expenseForm.reset();

  }

  goToHome() {
    this.router.navigate(['/expenselist'], {
      queryParams: {
        pageIndex: this.pageIndex,
        month: this.selectedMonth, year: this.selectedYear
      }
    });
  }

}
