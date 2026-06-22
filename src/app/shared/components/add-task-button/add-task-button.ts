import { Component, inject, output } from '@angular/core';
import { take } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AddTaskPopup } from '../add-task-popup/add-task-popup';

@Component({
  selector: 'app-add-task-button',
  imports: [MatIconModule, MatDialogModule],
  templateUrl: './add-task-button.html',
})
export class AddTaskButton {
  private readonly dialog = inject(MatDialog);
  taskAdded = output<string>();

  openPopup() {
    this.dialog
      .open(AddTaskPopup, {
        width: '28rem',
        maxWidth: 'calc(100vw - 2rem)',
      })
      .afterClosed()
      .pipe(take(1))
      .subscribe((title) => {
        if (!title) return;
        this.taskAdded.emit(title);
      });
  }
}
