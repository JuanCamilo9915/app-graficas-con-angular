import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // mostrarGrafica
  sonGraficasNormalesVisibles: boolean;
  elementosMenu: object[];
  menuDesconocido = 'Menú Desconcido';

  constructor() {}

  ngOnInit(): void {
      this.sonGraficasNormalesVisibles = true;
      this.elementosMenu = [
        {url: '#graficaBarras', etiqueta: 'Barras'},
        {url: '#graficaBarras2', etiqueta: 'Barras 2', tget: '_self'},
        {url: '#graficaBarras2', etiqueta: 'Barras 2', tget: '_blank'},
        {url: 'https://developer.mozilla.org/en-US/', tget: '_self'},
        {url: 'https://developer.mozilla.org/en-US/', tget: '_blank'},
        {url: 'https://developer.mozilla.org/en-US/'},
        {url: 'https://developer.mozilla.org/en-US/', tget: '_self'},
        {url: 'https://developer.mozilla.org/en-US/', tget: '_blank'},
        {url: 'https://developer.mozilla.org/en-US/', tget: '_blank'},
        {url: 'https://developer.mozilla.org/en-US/'},
        {url: 'https://developer.mozilla.org/en-US/', tget: '_self'},
        {url: 'https://developer.mozilla.org/en-US/', tget: '_blank'}
      ];
  }
  
}
