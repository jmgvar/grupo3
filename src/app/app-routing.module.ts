import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './pages/login/login-component/login-component.component';
import { ListadoUsuariosComponentComponent } from './pages/user/listado-usuarios-component/listado-usuarios-component.component';
import { ListadoRecursosComponentComponent } from './pages/resource/listado-recursos-component/listado-recursos-component.component';
import { RegisterComponentComponent } from './pages/register/register-component/register-component.component';
import { DetalleRecursoComponentComponent } from './pages/resource/detalle-recurso-component/detalle-recurso-component.component';

const routes: Routes = [
      { path: '', component: LoginComponentComponent },
      { path: 'users', component: ListadoUsuariosComponentComponent},
      { path: 'register', component: RegisterComponentComponent},
      { path: 'resources', component: ListadoRecursosComponentComponent,
        children: [
          { path: 'detail/:id', component: DetalleRecursoComponentComponent}
        ]
      }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
