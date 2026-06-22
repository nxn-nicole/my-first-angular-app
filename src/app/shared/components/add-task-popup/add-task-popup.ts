import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TimeSelector } from '../time-selector/time-selector';
import { MatDividerModule } from '@angular/material/divider';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Time } from '../../models/time.model';
import { Season } from '../../models/season.model';
import { NewTaskDTO } from '../../models/task.model';

@Component({
  selector: 'app-add-task-popup',
  imports: [MatDialogModule, TimeSelector, MatDividerModule, ReactiveFormsModule],
  templateUrl: './add-task-popup.html',
})
export class AddTaskPopup {
  private readonly dialogRef = inject(MatDialogRef<AddTaskPopup, NewTaskDTO | undefined>);

  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    time: new FormControl<Time>({ year: 1, season: Season.SPRING, day: 1, hour: 8, minute: 0 }),
  });

  close() {
    this.taskForm.reset();
    this.dialogRef.close();
  }

  submitTask() {
    if (this.taskForm.invalid) return;
    const { title, time } = this.taskForm.value;
    if (!title?.trim() || !time) return;

    this.taskForm.reset();
    this.dialogRef.close({ title: title.trim(), time });
  }
}
