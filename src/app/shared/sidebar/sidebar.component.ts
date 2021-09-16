import { Component } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent{

  get historial():string[]{
    return this.gifService.historial;
  }

  constructor(private gifService: GifService) { }

  buscar(termino: string):void{
    this.gifService.buscarGifs(termino);
  }

}
