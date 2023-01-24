import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ExpenseType, expenseTypes } from '../expenselist';

@Component({
  selector: 'app-expense-type-list',
  templateUrl: './expense-type-list.component.html',
  styleUrls: ['./expense-type-list.component.css']
})
export class ExpenseTypeListComponent implements OnInit {
  expenseTypeList:ExpenseType[]=[];
  expenseTypeForm = new FormGroup({
     expenseType: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
    this.getData();
  }


  public getData(){
    //local storage
    if(localStorage.getItem('expTypeList') !== null){
      let list:ExpenseType[]= JSON.parse(localStorage.getItem('expTypeList')!);      
       this.expenseTypeList=list;
     }
     else{
      let array:ExpenseType[]=[];
      var count=1;
      expenseTypes.forEach(x=>{        
        array.push({id:count, expense_type:x});
        count++;
      });     
      localStorage.setItem('expTypeList',JSON.stringify(array));
     }
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

}
