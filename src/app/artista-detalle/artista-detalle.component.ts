import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artista-detalle',
  templateUrl: './artista-detalle.component.html',
  styleUrls: ['./artista-detalle.component.css'],
  inputs: ['artista']
})
export class ArtistaDetalleComponent implements OnInit {

  constructor() {

    console.log('constructor artista detalle');
   }

  ngOnInit() {
    console.log('artista-detalle OnInit');
  }

}
