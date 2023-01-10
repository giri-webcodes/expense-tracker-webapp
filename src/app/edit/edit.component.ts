import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from '../expenselist';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  expenseobj: Expense;
  expenseForm: FormGroup;
  id:Number=0;
  pageIndex:Number=0;
  selectedMonth:Number=0;
  selectedYear:Number=0;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    
    
    this.route.queryParams.subscribe(params=>{
       this.id=params['expenseId'];
       this.selectedMonth=params['month'];
       this.selectedYear=params['year'];
       this.pageIndex=params['pageIndex'];
    });

   
    let list:Expense[]= JSON.parse(localStorage.getItem('expList')!);
    
     this.expenseobj = list.find(x=>x.id==this.id)!;
       
    this.expenseForm = this.fb.group({
      expense: new FormControl([this.expenseobj.expense]),
      amount: new FormControl([this.expenseobj.amount]),
      date: new FormControl([new Date(this.expenseobj.date).toISOString().substring(0, 10)]),
      comment: new FormControl([this.expenseobj.comment])
    });
  }

  onSubmit() {    
      let list:Expense[]= JSON.parse(localStorage.getItem('expList')!);       
      var index = list.indexOf(this.expenseobj);
      list.splice(index,1);
      
      list.push({id:this.id,expense:this.expenseForm.value.expense,amount:parseFloat(this.expenseForm.value.amount!),
        date:new Date(this.expenseForm.value.date!),comment:this.expenseForm.value.comment});

      localStorage.clear();
      localStorage.setItem('expList',JSON.stringify(list));
  }

  goToHome(){
    this.router.navigate(['/expenselist'],{
      queryParams:{
        pageIndex:this.pageIndex,
    month:this.selectedMonth,year:this.selectedYear
      }
    });
  }

}
