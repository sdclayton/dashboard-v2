import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NgForm } from '@angular/forms';
import { TaskService } from 'src/app/tasks/task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css'],
})
export class FormTaskComponent implements OnInit {
  constructor(private taskService: TaskService, private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    // console.log(form.value);

    let newTask: Task = new Task(
      form.value.task,
      form.value.category,
      form.value.notes
    );
    // addTask
    this.taskService.addTask(newTask);

    // send http request
    this.http
      .put(
        'https://dashboardapp-79921-default-rtdb.firebaseio.com/post.json',
        this.taskService.getTasks()
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }
}
