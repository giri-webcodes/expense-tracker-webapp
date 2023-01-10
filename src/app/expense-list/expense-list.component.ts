import { Component,OnInit,ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { monthList } from '../expenselist';
import { yearList } from '../expenselist';
import { Expense } from '../expenselist';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})

export class ExpenseListComponent implements OnInit {
  public expenseList=new MatTableDataSource<any>([]);
  
   headerColumns:string[]=['expense','amount','date'];

   @ViewChild(MatPaginator)  paginator: MatPaginator;
   monthList=monthList;
   strMonth:any;
   yearList=yearList;
   totalExpense:number=0;
   filterList:Expense[]=[];

   //pagination
   pageIndex=0;

   public selectedMonth:number=0;
   public selectedYear:number=0;

   constructor(private router:Router, private route:ActivatedRoute){
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
    setTimeout(()=>{
      this.paginator.pageIndex=this.pageIndex;      
      this.getData()
    },0);  
    
                    
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
        this.totalExpense=this.totalExpense+x.amount;      
      }      
    });

    this.expenseList.data=this.filterList;     
   }
   
   pageEvent(event: PageEvent){
        this.pageIndex=event.pageIndex;
   }

   goToEdit(id:Number){
   this.router.navigate(['/expense/edit/'],{queryParams:{expenseId:id,pageIndex:this.pageIndex,
    month:this.selectedMonth,year:this.selectedYear}});
   }
}
