import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReadUserComponent } from './read-user/read-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';

const routes: Routes = [
  {
    path: '',
    component: ReadUserComponent
  },
  {
    path: 'new',
    component: CreateUserComponent
  },
  {
    path: 'delete',
    component: DeleteUserComponent
  },
  {
    path: 'edit/:id',
    component: EditUserComponent
  },
  {
    path: 'list',
    component: ReadUserComponent
  },
  {
    path: 'perfil',
    component: PerfilUserComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
