import { Component, input, output } from '@angular/core';
import { DecimalPipe, TitleCasePipe } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Task } from '../../models/task.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-task-card',
  imports: [MatCheckboxModule, MatIconModule, TitleCasePipe, DecimalPipe],
  templateUrl: './task-card.html',
})
export class TaskCard {
  task = input.required<Task>();
  toggled = output<Task>();
  deleted = output<string>();

  onToggle() {
    this.toggled.emit({ ...this.task(), completed: !this.task().completed });
  }

  onDelete() {
    this.deleted.emit(this.task().id);
  }
}
