import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-graficas-normales',
  templateUrl: './graficas-normales.component.html',
  styleUrls: ['./graficas-normales.component.css']
})
export class GraficasNormalesComponent implements OnInit {

  @ViewChild('myGraf') grafica!: ElementRef

  muestra: boolean = true;
  c: any = [];
  c2: any = [];
  dataAleatoria: number[] = [12, 19, 3, 5, 2, 3];

  constructor() { }

  ngOnInit(): void {
    this.muestra = true;
    this.cre();
    this.cre2();
  }

  cre() {
    this.c = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: this.dataAleatoria,
          backgroundColor: ['green', 'blue', 'yellow'],
          // borderColor: "green",
          // borderWidth: 7
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }


  cre2() {
    this.c2 = new Chart('myChart2', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: this.dataAleatoria,
          backgroundColor: ['green', 'blue', 'yellow'],
          borderColor: "green",
          borderWidth: 7
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  valoresAleatorios(): void {
    let i = 0;
    for (const iterator of this.dataAleatoria) {
      this.dataAleatoria[i] = Math.floor(Math.random() * 100);
      i++;
    }

    this.c.destroy()
    this.cre();
    this.c2.destroy()
    this.cre2();
  }

}
