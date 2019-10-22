import { Component, OnInit } from '@angular/core';
import { CatalogoService } from './services/catalogo.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SucursalDigital';
  tipos: any[] = [];

  constructor(protected catalogoService: CatalogoService) {}

  ngOnInit() {
    this.catalogoService.getTipos()
    .subscribe(
      (data) => { // Success
        this.tipos  = data['Result'];

        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }




}
