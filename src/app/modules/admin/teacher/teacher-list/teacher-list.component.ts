import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../services/teachers.service';
import { TeachersResponse } from '../models/teachers.model';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css'],
})
export class TeacherListComponent implements OnInit {


  teachers: TeachersResponse[] = [];

  constructor(private $teachers: TeachersService) {}

  ngOnInit(): void {
    this.$teachers.getAll().subscribe((result) => {
      this.teachers = result
    });
  }
}
