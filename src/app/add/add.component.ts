import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from '../expenselist';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  pageIndex: Number = 0;
  selectedMonth: Number = 0;
  selectedYear: Number = 0;

  expenseForm = new FormGroup({
    expense: new FormControl(''),
    amount: new FormControl(''),
    date: new FormControl(''),
    comment: new FormControl('')
  });

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.pageIndex = params['pageIndex'];
      this.selectedMonth = params['month'];
      this.selectedYear = params['year'];
    });
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
    array.push({id:count,expense:this.expenseForm.value.expense!,amount:parseFloat(this.expenseForm.value.amount!),
      date:new Date(this.expenseForm.value.date!),comment:this.expenseForm.value.comment!});

      localStorage.setItem('expList',JSON.stringify(array));

      var alert = document.getElementById("alert")!;     
      alert.style.display = 'block';          
setTimeout(function (){
  alert.style.display = 'none'; 
},1000);
this.expenseForm.reset();
document.getElementById('expense')?.focus();

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
