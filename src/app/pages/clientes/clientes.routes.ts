import { Routes } from '@angular/router';
import { DetalleClienteComponent } from './detalle-cliente/detalle-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';

export const CLIENTES_ROUTES: Routes = [
    {
        path: 'lista',
        component: ListaClientesComponent
    },
    {
        path: 'nuevo',
        component: NuevoClienteComponent
    },
    {
        path: 'editar/:id',
        component: EditarClienteComponent
    },
    {
        path: 'detalle/:id',
        component: DetalleClienteComponent
    },
    {
        path: '**', 
        pathMatch:'full', 
        redirectTo: 'lista'
    }
];
