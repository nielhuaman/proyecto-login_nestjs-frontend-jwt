import { interceptorProvider } from './interceptors/producto.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListaProductoComponent } from './producto/lista-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CursosComponent } from './cursos/cursos.component';
import { NuevoCursoComponent } from './cursos/nuevo-curso.component';
import { ListarCursoComponent } from './cursos/listar-curso.component';
<<<<<<< HEAD
import { AuthenticationComponent } from './layouts/authentication/authentication.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { WelcomeComponent } from './layouts/welcome/welcome.component';
=======
import { EditarCursoComponent } from './cursos/editar-curso.component';
import { VerCursoComponent } from './cursos/ver-curso.component';
>>>>>>> 682ac136640915a75f796b01927730be8cd82b29


@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    DetalleProductoComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    RegistroComponent,
    CursosComponent,
    NuevoCursoComponent,
    ListarCursoComponent,
<<<<<<< HEAD
    AuthenticationComponent,
    DashboardComponent,
    WelcomeComponent
=======
    EditarCursoComponent,
    VerCursoComponent
>>>>>>> 682ac136640915a75f796b01927730be8cd82b29
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
