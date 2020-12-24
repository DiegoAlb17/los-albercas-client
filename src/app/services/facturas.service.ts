import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FacturaInterface } from '../models/factura.interface';

@Injectable({
  providedIn: 'root'
})
export class FacturasServices {

  constructor(private http: HttpClient) {
  }

  getFacturas() {
    return this.http.get<any>('assets/mock/facturas.json')
    .toPromise()
    .then(res => <FacturaInterface[]>res.data)
    .then(data => { return data; });
  }
}
