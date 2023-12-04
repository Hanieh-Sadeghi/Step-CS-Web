import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HederComponent } from '../heder/heder.component';
import { MainComponent } from '../main/main.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  imports: [CommonModule, HederComponent, MainComponent, FooterComponent],
})
export class TodoComponent {
  showTodo(todo:string){
    console.log('from parent');
    console.log(todo);
    
  }
}
