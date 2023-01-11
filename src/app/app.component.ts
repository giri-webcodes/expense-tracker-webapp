import { Component } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expense-tracker';

  downloadFile(){
    var year = new Date().getFullYear();
    var jsonstr =localStorage.getItem('expList');
    var blob = new Blob([jsonstr!], {
      type: "application/json"  
    });
    var filename = "expense_"+year+".json";
    saveAs(blob, filename);
  }

}
