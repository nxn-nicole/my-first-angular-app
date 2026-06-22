import { Component, signal } from '@angular/core';
import { TaskCard } from './shared/components/task-card/task-card';
import { Task } from './shared/models/task.model';
import { AddTaskButton } from './shared/components/add-task-button/add-task-button';

@Component({
  selector: 'app-root',
  imports: [TaskCard, AddTaskButton],
  templateUrl: './app.html',
})
export class App {
  tasks = signal<Task[]>([
    { id: '1', title: 'Learn Angular signals', completed: false },
    { id: '2', title: 'Build a task card component', completed: true },
    { id: '3', title: 'Style with Tailwind CSS', completed: false },
  ]);

  addTask(title: string) {
    this.tasks.update((tasks) => [
      ...tasks,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  onTaskToggled(updatedTask: Task) {
    this.tasks.update((tasks) => tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
  }

  onTaskDeleted(id: string) {
    this.tasks.update((tasks) => tasks.filter((t) => t.id !== id));
  }
}
