import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.css']
})
export class CatalogosComponent  {

  constructor(protected http: HttpClient) { }

  getCatalogoTipo() {
    return this.http.get('http://localhost:51099/SucursalDigital/GetCatalogoTipos');
  }


}
