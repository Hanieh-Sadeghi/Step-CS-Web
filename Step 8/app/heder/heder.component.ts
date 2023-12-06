import { Component , Output , EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-heder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heder.component.html',
  styleUrl: './heder.component.css',
})
export class HederComponent {

  @Output() todoEvent = new EventEmitter<string>();

  addButton(event: Event , todo: string) {
    event.preventDefault()
    this.todoEvent.emit(todo);
  }
}
