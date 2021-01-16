import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ReadUserComponent } from './read-user/read-user.component';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';


@NgModule({
  declarations: [CreateUserComponent, DeleteUserComponent, EditUserComponent, ReadUserComponent, PerfilUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
