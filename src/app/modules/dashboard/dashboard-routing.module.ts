import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'course',
    loadChildren:()=>import('./course/course.module').then(m=>m.CourseModule)
  },
  {
    path:'enrollment',
    loadChildren:()=>import('./enrollment/enrollment.module').then(m=>m.EnrollmentModule)
  },
  {
    path:'producto',
    loadChildren:()=>import('./producto/producto.module').then(m=>m.ProductoModule)
  },
  {
    path:'user',
    loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path:'matricula',
    loadChildren:()=>import('./matricula/matricula.module').then(m=>m.MatriculaModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
