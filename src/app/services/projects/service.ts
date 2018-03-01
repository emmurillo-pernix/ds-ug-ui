import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { ProjectByWorker } from './../../models/projects';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectsService {
	constructor(private http: HttpService) { }

	getProjectsByWorker(): Observable<ProjectByWorker[]> {
		return this.http.get('/projects');
	};
}

