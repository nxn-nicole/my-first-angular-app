import { Component, input, output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-card',
  imports: [MatCheckboxModule],
  templateUrl: './task-card.html',
})
export class TaskCard {
  task = input.required<Task>();
  toggled = output<Task>();

  onToggle() {
    this.toggled.emit({ ...this.task(), completed: !this.task().completed });
  }
}
