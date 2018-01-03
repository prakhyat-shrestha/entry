import { Component } from '@angular/core';
import { MyDataService } from './my-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app Works';
  items = [];
  newItem = "";
  

  constructor(private myDataService:MyDataService){}
  
/*   ngOnInit(){
   this.myDataService.fetchData().subscribe(
    (data) => this.items = data );
    
  }

  pushItem = function(){
    if(this.newItem != ""){
      this.items.push(this.newItem);
      this.newItem = "";
    }
  }

  removeItem = function(index){
    this.items.splice(index,1)
  } */
}
