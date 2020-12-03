import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CreateCourseComponent } from './create-course/create-course.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { EditeCourseComponent } from './edite-course/edite-course.component';
import { ReadCourseComponent } from './read-course/read-course.component';


@NgModule({
  declarations: [CreateCourseComponent, DeleteCourseComponent, EditeCourseComponent, ReadCourseComponent],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
