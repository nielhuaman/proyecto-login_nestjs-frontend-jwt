//import { AuthenticationModule } from './modules/authentication/authentication.module';
// import { ProductoGuard } from './guards/producto.guard';
// import { LoginGuard } from './guards/login.guard';
// import { RegistroComponent } from './auth/registro.component';
// import { LoginComponent } from './auth/login.component';
// import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ListaProductoComponent } from './producto/lista-producto.component';
// import { DetalleProductoComponent } from './producto/detalle-producto.component';
// import { NuevoProductoComponent } from './producto/nuevo-producto.component';
// import { EditarProductoComponent } from './producto/editar-producto.component';
// import { NuevoCursoComponent } from './cursos/nuevo-curso.component';
// import { ListarCursoComponent } from './cursos/listar-curso.component';
// import { EditarCursoComponent } from './cursos/editar-curso.component';
// import { VerCursoComponent } from './cursos/ver-curso.component';
// import { CreateMatriculaComponent } from './matricula/create-matricula/create-matricula.component';
// import { EditarMatriculaComponent } from './matricula/editar-matricula/editar-matricula.component';
// import { EliminarMatriculaComponent } from './matricula/eliminar-matricula/eliminar-matricula.component';
// import { ListarMatriculaComponent } from './matricula/listar-matricula/listar-matricula.component';
// import { DetalleMatriculaComponent } from './matricula/detalle-matricula/detalle-matricula.component';
import { WelcomeComponent } from './layouts/welcome/welcome.component';
import { AuthenticationComponent } from './layouts/authentication/authentication.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { AuthenticationGuard } from './core/guards/authentication.guard';


const routes: Routes = [
  // {path: '', component: HomeComponent},
  // {path: 'lista', component: ListaProductoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin', 'user']}},
  // {path: 'detalle/:id', component: DetalleProductoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin', 'user']}},
  // {path: 'nuevo', component: NuevoProductoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  // {path: 'editar/:id', component: EditarProductoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  // {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  // {path: 'registro', component: RegistroComponent, canActivate: [LoginGuard]},
  // {path: 'nuevo-curso', component: NuevoCursoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  // {path: 'curso-lista', component: ListarCursoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  // {path: 'curso/:id', component: EditarCursoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  // {path: 'curso-ver/:id', component: VerCursoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  // {path: 'enrollment/create', component:CreateMatriculaComponent},
  // {path: 'enrollment/edit/:id', component:EditarMatriculaComponent},
  // {path: 'enrollment/delete', component:EliminarMatriculaComponent},
  // {path: 'enrollment', component:ListarMatriculaComponent},
  // {path: 'enrollment/:id', component:DetalleMatriculaComponent},
  // {path: '**', redirectTo: '', pathMatch: 'full'}
  {
    path: '',
    component: WelcomeComponent,
    loadChildren: () => import('./modules/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    loadChildren: () => import('./modules/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'auth',
    component: AuthenticationComponent,
    loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
