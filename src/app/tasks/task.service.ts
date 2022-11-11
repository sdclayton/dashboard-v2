import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // taskSelected = new EventEmitter<Task[]>();
  tasksSubject = new Subject<Task[]>();
  tasksListChanged = new Subject<Task[]>();

  private tasks: Task[] = [
    // new Task(
    //   'Watch Angular Videos',
    //   'CodeLabs',
    //   'Complete HTTP Request video and project'
    // ),
    // new Task(
    //   'Grade Marketing Assignments',
    //   'Launch',
    //   'Grades need to be updated and posted by 12 pm'
    // ),
  ];

  getTasks() {
    console.log(this.tasks);
    return this.tasks.slice();
  }

  addTask(newTask: Task) {
    // push method
    this.tasks.push(newTask);

    console.log(this.tasks);
    this.tasksSubject.next(this.getTasks());
  }

  // delete task
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.tasksSubject.next(this.getTasks());
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }
}
