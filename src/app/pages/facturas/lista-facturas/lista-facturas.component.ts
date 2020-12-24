import { Component, OnInit } from '@angular/core';
import { FacturaInterface } from 'src/app/models/factura.interface';

import { LazyLoadEvent } from 'primeng/api';
import { FilterMetadata } from 'primeng/api';
import { FacturasServices } from 'src/app/services/facturas.service';

@Component({
  selector: 'app-lista-facturas',
  templateUrl: './lista-facturas.component.html',
  styleUrls: ['./lista-facturas.component.css']
})
export class ListaFacturasComponent implements OnInit {

  datasource: FacturaInterface[];
  facturas: FacturaInterface[];
  totalRecords: number;
  cols: any[];
  loading: boolean;

  constructor(private facturaService: FacturasServices) {
  }

  ngOnInit(): void {
    this.facturaService.getFacturas().then(data => {
      this.datasource = data;
      this.totalRecords = data.length;
    });

    this.loading = true;
  }

  loadCustomers(event: LazyLoadEvent) {  
    this.loading = true;

    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    //imitate db connection over a network
    setTimeout(() => {
        if (this.datasource) {
            this.facturas = this.datasource.slice(event.first, (event.first + event.rows));
            this.loading = false;
        }
    }, 100);
  }

}
