import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DetalleFacturaComponent } from './detalle-factura/detalle-factura.component';
import { ListaFacturasComponent } from './lista-facturas/lista-facturas.component';
import { NuevaFacturaComponent } from './nueva-factura/nueva-factura.component';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {RippleModule} from 'primeng/ripple';


@NgModule({
  declarations: [
    ListaFacturasComponent,
    NuevaFacturaComponent,
    DetalleFacturaComponent
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
export class FacturasModule { }
