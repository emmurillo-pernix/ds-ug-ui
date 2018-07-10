import { Component, ViewEncapsulation, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Task } from "../../models/tasks";
import { ProjectsService } from "../../services/projects/service";
import { ProjectByWorker } from "../../models/projects";

@Component({
  templateUrl: 'view.html',
  selector: 'task-slot',
  styleUrls: ['styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskSlotComponent implements OnInit {
  private projects: ProjectByWorker[] = [];
  private taskForm: FormGroup;
  private projectCode: FormControl;
  private taskNumber: FormControl;
  private description: FormControl;
  @Input() readOnly = false;
  @Input() task = {} as Task;
  @Output() taskAdded: EventEmitter<Task> = new EventEmitter();

  constructor(private projectsService: ProjectsService) {
    projectsService.getProjectsByWorker().subscribe(this.handleProjectsLoadedSuccess, console.error);
  }

  private handleProjectsLoadedSuccess = (response: ProjectByWorker[]) => {
    this.projects = response;
  }

  ngOnInit() {
    this.projectCode = new FormControl({ value: this.task.project_code || null, disabled: this.readOnly });
    this.taskNumber = new FormControl({ value: this.task.number, disabled: this.readOnly });
    this.description = new FormControl({ value: this.task.description, disabled: this.readOnly }, Validators.required);
    this.taskForm = new FormGroup({
      'projectCode': this.projectCode,
      'taskNumber': this.taskNumber,
      'description': this.description
    });
  }

  addTask() {
    this.onTaskAdded.emit({
      project_code: this.projectCode.value,
      number: this.taskNumber.value,
      description: this.description.value,
    });
    this.taskForm.reset();
  }
}