import { Routes } from '@angular/router';
import { DetalleUsuarioComponent } from '../usuario/detalle-usuario/detalle-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';

export const USUARIOS_ROUTES: Routes = [
    {
        path: 'lista',
        component: ListaUsuariosComponent
    },
    {
        path: 'nuevo',
        component: NuevoUsuarioComponent
    },
    {
        path: 'editar/:id',
        component: EditarUsuarioComponent
    },
    {
        path: 'detalle/:id',
        component: DetalleUsuarioComponent
    },
    {
        path: '**', 
        pathMatch:'full', 
        redirectTo: 'lista'
    }
];
