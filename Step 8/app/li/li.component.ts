import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-li',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './li.component.html',
  styles: '@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"',
  styleUrls: ['./li.component.css'],
})

export class LiComponent {
  @Input() task: string = '';

  @Output() checkBoxEvent = new EventEmitter<boolean>();
  @Output() editEvent = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<string>();

  test(check: boolean) {
    this.checkBoxEvent.emit(check);
  }

  editTask(task: string) {
    this.editEvent.emit(task);
  }

  deleteTask() {
    this.deleteEvent.emit(this.task);
  }
}
