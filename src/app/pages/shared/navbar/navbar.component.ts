import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Facturas', icon: 'pi pi-fw pi-file', routerLink: 'facturas'},
      {label: 'Clientes', icon: 'pi pi-fw pi-calendar', routerLink: 'clientes'},
      {label: 'Trabajadores', icon: 'pi pi-fw pi-pencil', routerLink: 'trabajadores'}
    ];
    this.activeItem = this.items[0];
  }

}
