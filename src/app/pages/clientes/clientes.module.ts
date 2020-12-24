import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { DetalleClienteComponent } from './detalle-cliente/detalle-cliente.component';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [
    ListaClientesComponent,
    EditarClienteComponent,
    DetalleClienteComponent,
    NuevoClienteComponent
  ],
  imports: [
      CommonModule,
      TableModule,
      ButtonModule,
      DropdownModule,
      RippleModule
  ],
  providers: [],
  bootstrap: []
})
export class ClientesModule { }
