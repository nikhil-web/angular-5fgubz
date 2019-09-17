import { Component } from '@angular/core';
import { todo } from "./todo";


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO';

  todoValue: string;
  list: todo[];

  ngOnInit() {
    this.list = [];
    this.todoValue = "";
  }

  addItem() {
    if (this.todoValue != "") {
      const newItem: todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false,
      }
      this.list.push(newItem);
    }
    this.todoValue = "";
  }


  deleteItem(id: number) {
    this.list = this.list.filter(item => item.id != id);
  }

}



