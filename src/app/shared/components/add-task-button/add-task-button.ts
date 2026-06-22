import { Component, inject, output } from '@angular/core';
import { take } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AddTaskPopup } from '../add-task-popup/add-task-popup';
import { NewTaskDTO } from '../../models/task.model';

@Component({
  selector: 'app-add-task-button',
  imports: [MatIconModule, MatDialogModule],
  templateUrl: './add-task-button.html',
})
export class AddTaskButton {
  private readonly dialog = inject(MatDialog);
  taskAdded = output<NewTaskDTO>();

  openPopup() {
    this.dialog
      .open(AddTaskPopup, {
        width: '28rem',
        maxWidth: 'calc(100vw - 2rem)',
      })
      .afterClosed()
      .pipe(take(1))
      .subscribe((task) => {
        if (!task) return;
        this.taskAdded.emit(task);
      });
  }
}
