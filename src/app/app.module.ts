import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArtistaComponentComponent } from './artista-component/artista-component.component';
import { ArtistaDetalleComponent } from './artista-detalle/artista-detalle.component';
import { BusquedaArtistaPipe } from './busqueda-artista.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponentComponent,
    ArtistaDetalleComponent,
    BusquedaArtistaPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
