import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CLIENTES_ROUTES } from './pages/clientes/clientes.routes';
import { FACTURAS_ROUTES } from './pages/facturas/facturas.routes';
import { TRABAJADORES_ROUTES } from './pages/trabajadores/trabajadores.routes';
import { USUARIOS_ROUTES } from './pages/usuarios/usuarios.routes';
import { LoginComponent } from './pages/login/login.component';

const ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'clientes', children: CLIENTES_ROUTES},
    {path: 'facturas', children: FACTURAS_ROUTES},
    {path: 'trabajadores', children: TRABAJADORES_ROUTES},
    {path: 'usuarios', children: USUARIOS_ROUTES},
    //{path: 'protegida', component: ProtegidaComponent, canActivate: [ AuthGuard ]},
    {path: '**', pathMatch: 'full', redirectTo: 'facturas'}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }