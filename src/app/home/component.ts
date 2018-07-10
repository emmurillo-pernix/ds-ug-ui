import { Component, ViewEncapsulation } from '@angular/core';
import { ProjectsService } from '../services/projects/service';
import { ProjectByWorker } from '../models/projects';
import { Task } from '../models/tasks';

@Component({
  templateUrl: 'view.html',
  styleUrls: ['styles.scss'],
  selector: 'home',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

  private reviewTasks: Task[] = [];
  private goalTasks: Task[] = [];
  private blockers: Task[] = [];
  private bvs: Task[] = [];

  constructor() { }

  addReviewTask(task: Task) {
    this.reviewTasks.push(task);
  }

  addGoalsTask(task: Task) {
    this.goalTasks.push(task);
  }

  addBlockers(blocker: Task) {
    this.blockers.push(blocker);
  }

  addBusinessValue(bv: Task) {
    this.bvs.push(bv);
  }

}