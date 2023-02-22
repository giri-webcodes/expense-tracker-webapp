import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ExpenseType, expenseTypes } from '../expenselist';

@Component({
  selector: 'app-expense-type-list',
  templateUrl: './expense-type-list.component.html',
  styleUrls: ['./expense-type-list.component.css']
})
export class ExpenseTypeListComponent implements OnInit {
  public expenseTypeList = new MatTableDataSource<ExpenseType>([]);
  expenseTypeForm = new FormGroup({
     expenseType: new FormControl('')
  });
  headerColumns:string[]=['expense_type'];
  @ViewChild(MatPaginator) paginator:MatPaginator;
  pageIndex=0;

  constructor() { }

  ngOnInit(): void {
    //this.getData();
  }

  ngAfterViewInit(){
    this.expenseTypeList.paginator=this.paginator;
    setTimeout(()=>{
    this.paginator.pageIndex=this.pageIndex;
    this.getData();
    });
  }


  public getData(){
    //local storage
    if(localStorage.getItem('expTypeList') !== null){
      let list:ExpenseType[]= JSON.parse(localStorage.getItem('expTypeList')!);
       if(list.length < 10){
        this.populateExpenseType();
       }
       else{
        list.sort((a,b)=>Number(b.id)-Number(a.id));      
       this.expenseTypeList.data=list;
       }
     }
     else{
       this.populateExpenseType();
     }
  }

  populateExpenseType(){
    let array:ExpenseType[]=[];
    var count=1;
    expenseTypes.forEach(x=>{        
      array.push({id:count, expense_type:x});
      count++;
    });     
    localStorage.setItem('expTypeList',JSON.stringify(array));
    this.expenseTypeList.data=array;
  }

  public onSubmit(){
   let array:ExpenseType[] = [];
   if (localStorage.getItem('expTypeList') !== null) {
    array = JSON.parse(localStorage.getItem('expTypeList')!);    
  }

  var count =array.length+1;
  var found =array.findIndex(e=>e.id===count);
  if(found != -1){
    count = count +1;
  }

  array.push({id:count,expense_type:this.expenseTypeForm.value.expenseType!});

  localStorage.setItem('expTypeList',JSON.stringify(array));

  var alert = document.getElementById("alert")!;     
  alert.style.display = 'block';          
setTimeout(function (){
alert.style.display = 'none'; 
},2000);
this.expenseTypeForm.reset();
document.getElementById('expenseType')?.focus();
this.getData();
  }

  pageEvent(event:PageEvent){
    this.pageIndex=event.pageIndex;
  }

}
