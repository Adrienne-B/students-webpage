import { Component, OnInit, Input } from '@angular/core';

import { Student } from '../student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input() student?: Student;
  //An @Input decorator allows a parent to update data in the child.
  //In this case, we'll be giving a Student to our Student-Detail component.

  constructor() { }

  ngOnInit(): void {
  }

}