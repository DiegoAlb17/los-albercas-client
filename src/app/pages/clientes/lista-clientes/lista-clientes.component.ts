import { Component, OnInit } from '@angular/core';
import { ClienteInterface } from 'src/app/models/cliente.interface';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes: ClienteInterface[] = [];

  constructor() {
    let cli1: ClienteInterface = {
      id: 1, 
      nif: "F23423434", 
      nombre: "EcoSpain S.L.", 
      apellidos: "null", 
      direccion: "Avda. España, 3"
    }

    this.clientes.push(cli1);
  }

  ngOnInit(): void {
  }

}
