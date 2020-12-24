import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { NuevoUsuarioComponent } from './usuarios/nuevo-usuario/nuevo-usuario.component';
import { NuevoTrabajadorComponent } from './trabajadores/nuevo-trabajador/nuevo-trabajador.component';
import { EditarTrabajadorComponent } from './trabajadores/editar-trabajador/editar-trabajador.component';
import { ListaTrabajadoresComponent } from './trabajadores/lista-trabajadores/lista-trabajadores.component';
import { DetalleTrabajadorComponent } from './trabajador/detalle-trabajador/detalle-trabajador.component';
import { DetalleUsuarioComponent } from './usuario/detalle-usuario/detalle-usuario.component';

import { FacturasModule } from './facturas/facturas.module';
import { ClientesModule } from './clientes/clientes.module';

@NgModule({
  declarations: [
    LoginComponent,
    ListaUsuariosComponent,
    EditarUsuarioComponent,
    NuevoUsuarioComponent,
    DetalleUsuarioComponent,
    NuevoTrabajadorComponent,
    EditarTrabajadorComponent,
    ListaTrabajadoresComponent,
    DetalleTrabajadorComponent
  ],
  imports: [
    FacturasModule,
    ClientesModule
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
