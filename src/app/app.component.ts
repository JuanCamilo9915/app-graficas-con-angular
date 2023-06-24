import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sonGraficasNormalesVisibles: boolean;
  elementosMenu: object[];

  constructor() {}

  ngOnInit(): void {
      this.sonGraficasNormalesVisibles = true;
      this.elementosMenu = [
        {url: 'https://developer.mozilla.org/en-US/'},
        {url: 'https://developer.mozilla.org/en-US/', tget: '_blank'},
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
