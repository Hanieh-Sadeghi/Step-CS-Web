import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from "./todo/todo.component";
import { HederComponent } from "./heder/heder.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, TodoComponent, HederComponent]
})
export class AppComponent {
  title = 'todo-app';
}
