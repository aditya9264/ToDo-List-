import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODOLIST';
  list : any[] = [];
  addTask(item:string){
    console.warn(item)
    this.list.push({id:this.list.length , name:item});
  }
  removeTask(id: number){
    console.warn(id)
    this.list = this.list.filter(item=>item.id != id) 
    // this line states that fliter all the id which is not equall to the id you clicked
  }
}
 