import { Component, OnDestroy, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-graficas-normales',
  templateUrl: './graficas-normales.component.html',
  styleUrls: ['./graficas-normales.component.css']
})
export class GraficasNormalesComponent implements OnInit, OnDestroy {

  muestra: boolean = true;
  c: any = [];
  c2: any = [];
  ct: any = [];
  c3: any = [];
  dataAleatoria: number[] = [12, 19, 3, 5, 2, 3];

  constructor() { }

  ngOnInit(): void {
    this.muestra = true;
    this.cre();
    this.cret2();
    this.cre2();
    this.cre3();
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


  cret2() {
    this.ct = new Chart('myChartt', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
          label: '# of Votes',
          data: this.dataAleatoria,
          backgroundColor: ['green', 'blue', 'yellow'],
          borderColor: "green",
          borderWidth: 7
        }
      ]
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

  cre3() {
    
    this.c3 = new Chart('myChart3', {
      type: 'line',
      data: {
        labels: ['junio', 'agosto', 'febrero', 'marzo', 'abril', 'diciembre', 'mayo', 'vacio'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
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

    // this.c.destroy()
    // this.cre();
    // this.c2.destroy()
    // this.cre2();
    this.c.update();
    this.c2.update();
  }

  ngOnDestroy(): void {
      console.log('Hola');
      console.log(this.c);
      this.c.destroy();
      console.log(this.c);
  }

}
