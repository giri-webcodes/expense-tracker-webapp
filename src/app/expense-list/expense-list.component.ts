import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component,OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { monthList } from '../expenselist';
import { yearList } from '../expenselist';
import { Expense } from '../expenselist';
import { ViewExpenseDialogComponent } from '../view-expense-dialog/view-expense-dialog.component';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})

export class ExpenseListComponent implements OnInit {
  public expenseList=new MatTableDataSource<Expense>([]);
  
   headerColumns:string[]=['expense','amount','details','edit'];

   @ViewChild(MatPaginator)  paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;
   monthList=monthList;
   strMonth:any;
   yearList=yearList;
   totalExpense:number=0;
   filterList:Expense[]=[];

   //pagination
   pageIndex=0;

   public selectedMonth:number=0;
   public selectedYear:number=0;

   constructor(private router:Router, private route:ActivatedRoute,public dialog:MatDialog,private _liveAnnouncer: LiveAnnouncer){
   }

   ngOnInit(){ 
    //localStorage.clear();    
    this.route.queryParams.subscribe(params=>{
      if(params['pageIndex'])
      {
          this.pageIndex=params['pageIndex'];
          this.selectedMonth=params['month'];
          this.selectedYear=params['year'];          
      }else{
        this.selectedMonth=new Date().getMonth()+1;    
        this.selectedYear=new Date().getFullYear(); 
      }

    });
        
    this.strMonth= monthList.find(x=>x.id==this.selectedMonth)?.value;     
   }

   ngAfterViewInit(){
   
    this.expenseList.paginator=this.paginator; 
    this.expenseList.sort=this.sort;
    setTimeout(()=>{
      this.paginator.pageIndex=this.pageIndex;      
      this.getData()
    },0);  
    
                    
   }
    
   announceSortChange(sortState: Sort) {
    
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event:Event){
    const filterValue =(event.target as HTMLInputElement).value;
    this.expenseList.filter= filterValue.trim().toLowerCase();
  }
      
   public getData(){
            
    this.filterList=[];

    //local storage
    if(localStorage.getItem('expList') !== null){
     let list:Expense[]= JSON.parse(localStorage.getItem('expList')!);      
      this.expenseList.data=list;
    }

    
    this.totalExpense=0;
    this.strMonth= monthList.find(x=>x.id==this.selectedMonth)?.value;

    this.expenseList.data.forEach(x=>{
      var dt = new Date(x.date);            
      if(Number(dt.getMonth()+1) == this.selectedMonth && dt.getFullYear() == this.selectedYear)
      {                
        this.filterList.push(x);  
        let amount:number=Number(x.amount);
        this.totalExpense= this.totalExpense+amount;      
      }      
    });
this.filterList.sort((a,b)=>Number(b.amount)-Number(a.amount))
    this.expenseList.data=this.filterList;     
   }
   
   pageEvent(event: PageEvent){
        this.pageIndex=event.pageIndex;
   }

   goToEdit(id:Number){
   this.router.navigate(['/expense/edit/'],{queryParams:{expenseId:id,pageIndex:this.pageIndex,
    month:this.selectedMonth,year:this.selectedYear}});
   }

   goToAdd(){
    this.router.navigate(['/add']);
   }

   goToReport(){
    this.router.navigate(['/report']);
   }

   viewDialog(id:Number){
    var expense=this.filterList.find(x=>x.id === id)!
this.dialog.open(ViewExpenseDialogComponent,{
  data:{
   id:expense.id,
   expense:expense.expense,
   amount:expense.amount,
   date:expense.date,
   comment:expense.comment
  }
});
   }
}
