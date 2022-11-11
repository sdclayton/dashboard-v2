import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
})
export class ListTasksComponent implements OnInit {
  tasks: any = [];

  constructor(private taskService: TaskService, private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://dashboardapp-79921-default-rtdb.firebaseio.com/post.json')
      .subscribe((posts) => {
        console.log(posts);
        this.taskService.setTasks(posts);
        this.tasks = posts;
      });

    // Send a get request to firebase to get all the tasks
    this.tasks = this.taskService.getTasks();
    console.log(this.tasks);
    this.taskService.tasksSubject.subscribe((tasks) => {
      console.log('TASKS', tasks);
      this.tasks = tasks;
    });
  }

  deletePosts() {
    return this.http.delete('https://dashboardapp-79921-default-rtdb.firebaseio.com/post.json')
  }

  // onClearPosts() {
  //   this.taskService.deleteTask().subscribe(() =>
  //     this.setTask = []
  //   );
  // }
}
