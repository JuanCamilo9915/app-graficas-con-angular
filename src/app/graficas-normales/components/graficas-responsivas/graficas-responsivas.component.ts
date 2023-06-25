import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-graficas-responsivas',
  templateUrl: './graficas-responsivas.component.html',
  styleUrls: ['./graficas-responsivas.component.css']
})
export class GraficasResponsivasComponent implements OnInit {

  c: any = [];
  c2: any = [];
  dataAleatoria: number[] = [12, 19, 3, 5, 2, 3];

  constructor() { }

  ngOnInit(): void {
    this.cre();
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

}
