import { Component, signal } from '@angular/core';
import { TaskCard } from './shared/components/task-card/task-card';
import { Task } from './shared/models/task.model';
import { Time } from './shared/models/time.model';
import { Season } from './shared/models/season.model';
import { AddTaskButton } from './shared/components/add-task-button/add-task-button';

@Component({
  selector: 'app-root',
  imports: [TaskCard, AddTaskButton],
  templateUrl: './app.html',
})
export class App {
  tasks = signal<Task[]>([
    {
      id: '1',
      title: 'Learn Angular signals',
      completed: false,
      time: { year: 1, season: Season.SPRING, day: 1, hour: 8, minute: 0 },
    },
    {
      id: '2',
      title: 'Build a task card component',
      completed: true,
      time: { year: 1, season: Season.SUMMER, day: 15, hour: 14, minute: 30 },
    },
    {
      id: '3',
      title: 'Style with Tailwind CSS',
      completed: false,
      time: { year: 1, season: Season.AUTUMN, day: 7, hour: 9, minute: 0 },
    },
  ]);

  addTask(title: string, time: Time) {
    this.tasks.update((tasks) => [...tasks, { id: crypto.randomUUID(), title, completed: false, time }]);
  }

  onTaskToggled(updatedTask: Task) {
    this.tasks.update((tasks) => tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
  }

  onTaskDeleted(id: string) {
    this.tasks.update((tasks) => tasks.filter((t) => t.id !== id));
  }
}
