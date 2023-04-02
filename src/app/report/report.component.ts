import { Component, ViewChild } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Expense } from '../expenselist';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: [ './report.component.css' ]
})
export class ReportComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  expenseList:Expense[]=[];
  labelArray:string[]=[];
  amountArray:number[]=[];
  

  ngOnInit(){ 
    this.getData();
  }

  public getData(){

     //local storage
     if(localStorage.getItem('expList') !== null){
      let list:Expense[]= JSON.parse(localStorage.getItem('expList')!);      
       this.expenseList=list;
     }

     var groupBy = function(xs:any, key:any) {
      return xs.reduce(function(rv:any, x:any) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };
    
  const grouped = groupBy(this.expenseList,"expense");
    //console.log(grouped);

    let groupedArray = Object.keys(grouped).map((key) => [key, grouped[key]]);
//console.log(groupedArray);
   
       groupedArray.forEach(x=>{
        this.labelArray.push(x[0]);
       let amount:Number=0;
        //console.log(x[1]);
        x[1].forEach(function(e:Expense) {
          amount=+amount + +e.amount;
        });
        this.amountArray.push(Number(amount));
         //console.log(x[0]);
         //console.log(x[1]);
       });
  }

  

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'bottom'      
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {    
    labels: this.labelArray,
    datasets: [ {      
      data: this.amountArray
    } ]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ DatalabelsPlugin ];

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }  
}