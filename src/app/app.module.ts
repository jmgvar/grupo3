import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './pages/login/login-component/login-component.component';
import { ListadoUsuariosComponentComponent } from './pages/user/listado-usuarios-component/listado-usuarios-component.component';
import { DetalleUsuarioComponentComponent } from './pages/user/detalle-usuario-component/detalle-usuario-component.component';
import { DetalleRecursoComponentComponent } from './pages/resource/detalle-recurso-component/detalle-recurso-component.component';
import { ListadoRecursosComponentComponent } from './pages/resource/listado-recursos-component/listado-recursos-component.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponentComponent } from './pages/register/register-component/register-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    ListadoUsuariosComponentComponent,
    DetalleUsuarioComponentComponent,
    DetalleRecursoComponentComponent,
    ListadoRecursosComponentComponent,
    HeaderComponent,
    RegisterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


