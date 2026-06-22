import { Component, inject, signal } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task-popup',
  imports: [MatDialogModule],
  templateUrl: './add-task-popup.html',
})
export class AddTaskPopup {
  private readonly dialogRef = inject(MatDialogRef<AddTaskPopup, string | undefined>);
  draftTitle = signal('');

  close() {
    this.draftTitle.set('');
    this.dialogRef.close();
  }

  updateDraftTitle(event: Event) {
    const input = event.target as HTMLInputElement;
    this.draftTitle.set(input.value);
  }

  submitTask() {
    const title = this.draftTitle().trim();
    if (!title) return;

    this.draftTitle.set('');
    this.dialogRef.close(title);
  }
}
