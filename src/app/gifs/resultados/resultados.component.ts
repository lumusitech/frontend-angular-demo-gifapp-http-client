import { Component } from '@angular/core';
import { Gif } from '../interfaces/gif.interface';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  get resultados(): Gif[]{
    return this.gifService.resultados;
  }

  constructor(private gifService: GifService) { }

}
