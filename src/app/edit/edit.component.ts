import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from '../expenselist';
import { expenseList } from '../expenselist';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  expenseobj: Expense;
  expenseForm: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('expenseId'));
    let jsonStr = JSON.stringify(expenseList.find(x => x.id == id));
    let json = JSON.parse(jsonStr);
    this.expenseobj = json as Expense;

    this.expenseForm = this.fb.group({
      expense: new FormControl([this.expenseobj.expense]),
      amount: new FormControl([this.expenseobj.amount]),
      date: new FormControl([new Date(this.expenseobj.date)]),
      comment: new FormControl([this.expenseobj.comment])
    });
  }

  onSubmit() {
    console.log(this.expenseForm.value);
  }

  goToHome(){
    this.router.navigate(['/']);
  }

}
