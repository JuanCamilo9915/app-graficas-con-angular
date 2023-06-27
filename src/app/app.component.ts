import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // mostrarGrafica
  sonGraficasNormalesVisibles: boolean;
  btn1: boolean;
  btn2: boolean;
  elementosMenu: object[];
  menuDesconocido = 'Menú Desconcido';

  constructor() {}

  ngOnInit(): void {
      this.sonGraficasNormalesVisibles = true;
      this.btn1 = true;
      this.btn2 = false;
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

  alerta(idEvent: number): void {
    this.sonGraficasNormalesVisibles = idEvent === 1 ? true : false;

    if (idEvent === 1) {
      this.btn1 = true;
      this.btn2 = false;
      return;
    }

    this.btn1 = false;
    this.btn2 = true;

  }
  
}
