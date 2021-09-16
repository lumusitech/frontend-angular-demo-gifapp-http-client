import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifService: GifService){}

  buscar():void{
    const valor = this.txtBuscar.nativeElement.value;
    this.gifService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value="";
  }
}
