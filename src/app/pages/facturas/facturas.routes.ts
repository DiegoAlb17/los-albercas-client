import { Routes } from '@angular/router';
import { DetalleFacturaComponent } from './detalle-factura/detalle-factura.component';
import { ListaFacturasComponent } from './lista-facturas/lista-facturas.component';
import { NuevaFacturaComponent } from './nueva-factura/nueva-factura.component';

export const FACTURAS_ROUTES: Routes = [
    {
        path: 'lista',
        component: ListaFacturasComponent
    },
    {
        path: 'nuevo',
        component: NuevaFacturaComponent
    },
    {
        path: 'detalle/:id',
        component: DetalleFacturaComponent
    },
    {
        path: '**', 
        pathMatch:'full', 
        redirectTo: 'lista'
    }
];
