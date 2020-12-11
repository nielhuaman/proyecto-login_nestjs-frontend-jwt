import { interceptorProvider } from './interceptors/producto.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
//import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { ListaProductoComponent } from './producto/lista-producto.component';
// import { NuevoProductoComponent } from './producto/nuevo-producto.component';
// import { EditarProductoComponent } from './producto/editar-producto.component';
// import { DetalleProductoComponent } from './producto/detalle-producto.component';
// import { HomeComponent } from './home/home.component';
// import { MenuComponent } from './menu/menu.component';
// import { LoginComponent } from './auth/login.component';
// import { RegistroComponent } from './auth/registro.component';

// // external
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrModule } from 'ngx-toastr';
// import { CursosComponent } from './cursos/cursos.component';
// import { NuevoCursoComponent } from './cursos/nuevo-curso.component';
// import { ListarCursoComponent } from './cursos/listar-curso.component';
import { AuthenticationComponent } from './layouts/authentication/authentication.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { WelcomeComponent } from './layouts/welcome/welcome.component';
import { NotpagefoundComponent } from './layouts/notpagefound/notpagefound.component';
// import { EditarCursoComponent } from './cursos/editar-curso.component';
// import { VerCursoComponent } from './cursos/ver-curso.component';
// import { EditarMatriculaComponent } from './matricula/editar-matricula/editar-matricula.component';
// import { CreateMatriculaComponent } from './matricula/create-matricula/create-matricula.component';
// import { ListarMatriculaComponent } from './matricula/listar-matricula/listar-matricula.component';
// import { EliminarMatriculaComponent } from './matricula/eliminar-matricula/eliminar-matricula.component';
// import { DetalleMatriculaComponent } from './matricula/detalle-matricula/detalle-matricula.component';


@NgModule({
  declarations: [
    AppComponent,
    // ListaProductoComponent,
    // NuevoProductoComponent,
    // EditarProductoComponent,
    // DetalleProductoComponent,
    // HomeComponent,
    // MenuComponent,
    // LoginComponent,
    // RegistroComponent,
    // CursosComponent,
    // NuevoCursoComponent,
    // ListarCursoComponent,
    AuthenticationComponent,
    DashboardComponent,
    WelcomeComponent,
    NotpagefoundComponent
    // EditarCursoComponent,
    // VerCursoComponent,
    // EditarMatriculaComponent,
    // CreateMatriculaComponent,
    // ListarMatriculaComponent,
    // EliminarMatriculaComponent,
    // DetalleMatriculaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    //FormsModule,
    //BrowserAnimationsModule,
    //ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
