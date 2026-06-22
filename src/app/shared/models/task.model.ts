import { Time } from './time.model';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  time: Time;
}

export type NewTaskDTO = Pick<Task, 'title' | 'time'>;
