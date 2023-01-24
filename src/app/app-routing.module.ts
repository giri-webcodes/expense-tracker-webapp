import { NgModule } from '@angular/core';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ExpenseTypeListComponent } from './expense-type-list/expense-type-list.component';

const routes: Routes = [
  {path:'',component:ExpenseListComponent },
  {path:'add',component:AddComponent},
  {path:'expense/edit',component:EditComponent},
  {path:'expenselist',component:ExpenseListComponent},
  {path:'expensetype',component:ExpenseTypeListComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
