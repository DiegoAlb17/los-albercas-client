import { Routes } from '@angular/router';
import { DetalleTrabajadorComponent } from '../trabajador/detalle-trabajador/detalle-trabajador.component';
import { EditarTrabajadorComponent } from './editar-trabajador/editar-trabajador.component';
import { ListaTrabajadoresComponent } from './lista-trabajadores/lista-trabajadores.component';
import { NuevoTrabajadorComponent } from './nuevo-trabajador/nuevo-trabajador.component';

export const TRABAJADORES_ROUTES: Routes = [
    {
        path: 'lista',
        component: ListaTrabajadoresComponent
    },
    {
        path: 'nuevo',
        component: NuevoTrabajadorComponent
    },
    {
        path: 'editar/:id',
        component: EditarTrabajadorComponent
    },
    {
        path: 'detalle/:id',
        component: DetalleTrabajadorComponent
    },
    {
        path: '**', 
        pathMatch:'full', 
        redirectTo: 'lista'
    }
];
