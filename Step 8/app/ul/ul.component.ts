import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiComponent } from '../li/li.component';

@Component({
  selector: 'app-ul',
  standalone: true,
  templateUrl: './ul.component.html',
  styleUrl: './ul.component.css',
  imports: [CommonModule, LiComponent],
})
export class UlComponent {

  checkBoxEvent(check: boolean) {
    console.log('From ul parent componet');
    console.log(check);
  }

  tasks = [
    {
      todo: 'readibooks',
      status: true,
    },
    {
      todo: 'hanie',
      status: true,
    },
    {
      todo: 'hi',
      status: true,
    },
  ];

}
