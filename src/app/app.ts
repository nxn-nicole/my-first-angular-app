import { Component, signal } from '@angular/core';
import { TaskCard } from './shared/components/task-card/task-card';
import { Task } from './shared/models/task.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [TaskCard, MatIconModule],
  templateUrl: './app.html',
})
export class App {
  tasks = signal<Task[]>([
    { id: '1', title: 'Learn Angular signals', completed: false },
    { id: '2', title: 'Build a task card component', completed: true },
    { id: '3', title: 'Style with Tailwind CSS', completed: false },
  ]);

  onTaskToggled(updatedTask: Task) {
    this.tasks.update((tasks) => tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
  }
}
