import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Expense } from '../expenselist';
import { expenseList } from '../expenselist';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

 expense!:Expense;

 constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
   const routeParams = this.route.snapshot.paramMap;
   const id = Number(routeParams.get('expenseId'));
   let jsonStr = JSON.stringify(expenseList.find(x=>x.id==id));
   let json = JSON.parse(jsonStr);
     this.expense= json as Expense;
  }

}
