import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  pageIndex:Number=0;
  selectedMonth:Number=0;
  selectedYear:Number=0;

  expenseForm = new FormGroup({
    expense: new FormControl(''),
    amount: new FormControl(''),
    date: new FormControl(''),
    comment: new FormControl('')
  });

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params=>{
      this.pageIndex=params['pageIndex'];
      this.selectedMonth=params['month'];
      this.selectedYear=params['year'];
    });
  }

  onSubmit(){
    console.log(this.expenseForm.value);    
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
