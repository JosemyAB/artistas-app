import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artista-component',
  templateUrl: './artista-component.component.html',
  styleUrls: ['./artista-component.component.css'],
  inputs: ['artista']
})
export class ArtistaComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
