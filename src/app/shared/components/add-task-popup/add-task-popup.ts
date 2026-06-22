import { Component, inject, signal } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TimeSelector } from '../time-selector/time-selector';
import { MatDividerModule } from '@angular/material/divider';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Time } from '../../models/time.model';
import { Season } from '../../models/season.model';

@Component({
  selector: 'app-add-task-popup',
  imports: [MatDialogModule, TimeSelector, MatDividerModule, ReactiveFormsModule],
  templateUrl: './add-task-popup.html',
})
export class AddTaskPopup {
  private readonly dialogRef = inject(MatDialogRef<AddTaskPopup, string | undefined>);

  taskForm = new FormGroup({
    title: new FormControl(''),
    time: new FormControl<Time>({ year: 1, season: Season.SPRING, day: 1, hour: 8, minute: 0 }),
  });

  close() {
    this.taskForm.reset();
    this.dialogRef.close();
  }

  submitTask() {
    const title = this.taskForm.value.title?.trim();
    if (!title) return;

    this.taskForm.reset();
    this.dialogRef.close(title);
  }
}
