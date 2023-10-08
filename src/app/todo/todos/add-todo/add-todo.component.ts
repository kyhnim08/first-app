import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `
      <button (click)="addTodo(newText)">+</button>
     <input type="text" placeholder="할 일 추가" [(ngModel)]="newText">
  `,
  styles: [`
      :host {
        display :block;
        padding :16px 16px 16px 10px;
        background-color:white;
      }

      input {
        display : inline-block;
        font-size:18px;
        border:none;
      }

      input:focus, button:focus {
        outline:none;
      }

      button {
        width:24px;
        height:24px;
        border-radius:24px;
        color:white;
        font-size:16px;
        line-height:17px;
        border:1px solid dimgray;
        background-color:blue;
      }

    `]
})
export class AddTodoComponent implements OnInit{

 newText : string;
  @Output() onTodoAdded = new EventEmitter();

  constructor () {
    this.newText =''
  }
  ngOnInit() {}

  addTodo(newText:string){
    this.onTodoAdded.emit(newText);
    this.newText ='';
  }
}
