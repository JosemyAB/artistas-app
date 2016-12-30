import { Pipe, PipeTransform } from '@angular/core';
import {Artist} from './app.component';

@Pipe({
  name: 'busquedaArtista'
})
export class BusquedaArtistaPipe implements PipeTransform {

  transform(artistas: Artist[], consulta) {

    if (consulta != null){
      return  artistas.filter((eachItem)=> {
      return  eachItem['name'].toLowerCase().includes(consulta.toLowerCase()) ||
              eachItem['reknown'].toLowerCase().includes(consulta.toLowerCase());
      });  
    }
    else {
      return artistas;
    }
  }

}
