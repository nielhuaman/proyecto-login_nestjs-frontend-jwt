import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentRoutingModule } from './enrollment-routing.module';
import { CreateEnrollmentComponent } from './create-enrollment/create-enrollment.component';
import { DeleteEnrollmentComponent } from './delete-enrollment/delete-enrollment.component';
import { EditEnrollmentComponent } from './edit-enrollment/edit-enrollment.component';
import { ReadEnrollmentComponent } from './read-enrollment/read-enrollment.component';


@NgModule({
  declarations: [CreateEnrollmentComponent, DeleteEnrollmentComponent, EditEnrollmentComponent, ReadEnrollmentComponent],
  imports: [
    CommonModule,
    EnrollmentRoutingModule
  ]
})
export class EnrollmentModule { }
