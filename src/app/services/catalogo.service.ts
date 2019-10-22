import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(protected http: HttpClient) { }


   //Esta url obtiene el catalogo de tipos 
  getTipos() {
    return this.http.get('http://localhost:51099/SucursalDigital/GetCatalogoTipos'); 
  }



}
