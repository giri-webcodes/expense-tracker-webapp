import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expense-tracker';

  constructor(private router:Router){

  }

  downloadFile(){
    var year = new Date().getFullYear();
    var jsonstr =localStorage.getItem('expList');
    var blob = new Blob([jsonstr!], {
      type: "application/json"  
    });
    var filename = "expense_"+year+".json";
    saveAs(blob, filename);
  }

  goToReport(){
    var year = new Date().getFullYear();
    var month= new Date().getMonth();
    this.router.navigate(['/report'],{
      queryParams:{
        month:month+1,
        year:year
      }
    });
   }

}
