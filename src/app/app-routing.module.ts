import { NgModule } from '@angular/core';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {path:'',component:ExpenseListComponent },
  {path:'add',component:AddComponent},
  {path:'expense/edit',component:EditComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
