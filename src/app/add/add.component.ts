import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  expenseForm = new FormGroup({
    expense: new FormControl(''),
    amount: new FormControl(''),
    date: new FormControl(''),
    comment: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.expenseForm.value);
  }

}
