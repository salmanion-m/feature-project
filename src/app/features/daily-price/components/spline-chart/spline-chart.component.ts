import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as Highcharts from "highcharts";
import {reduce} from "rxjs";


@Component({
  selector: 'app-spline-chart',
  templateUrl: './spline-chart.component.html',
  styleUrls: ['./spline-chart.component.scss']
})
export class SplineChartComponent implements OnInit , AfterViewInit{


  @ViewChild('target')

  chartTarget: ElementRef<any>;
  config: Highcharts.Options;
  chart: Highcharts.Chart;
  // colors = Highcharts.getOptions().colors;


  @Input() pClosing: (null | number)[] = [];
  @Input() namechart: string[] = [];
  @Input() xNivInuClMresIbs: (null | number)[] = [];


  ngOnInit() {
    // console.log('this.newData2', this.pClosing);
    // console.log('this.newName2', this.namechart);
    // console.log('xNivInuClMresIbs', this.xNivInuClMresIbs)

  }

  ngAfterViewInit() {

    this.config = {
      chart: {
        type: 'spline',
        events: {
          load() {
            // console.log(this.options.colors)
          }
        }
      },
      xAxis: {
        // type: 'datetime',
        // dateTimeLabelFormats: {
        //   month: '%e. %b',
        //   year: '%b'
        // }
        // reversed: true,
        categories: this.namechart,
        labels: {
          rotation:-45,
        }
      },
      yAxis: [
        // {
        //   title: {
        //     text: 'قیمت',
        //   },
        // },
        { // Primary yAxis
          labels: {
            // format: '{value}°C',
            style: {
              color: '#4DD0E1'
            }
          },
          title: {
            text: 'قیمت',
            style: {
              color: '#4DD0E1'
            }
          },
          // opposite: true

        },
        { // Secondary yAxis
          labels: {
            style: {
              color: 'black'
            }
          },
          title: {
            text: 'شاخص',
            style: {
              color: 'black'
            }
          },
          opposite: true

        },
      ],
      colors: ['#4DD0E1', 'black'],

      series: [
        {
          name: 'pClosing',
          type: 'line',
          data: this.pClosing,
          yAxis: 0,
        },
        {
          name: 'xNivInuClMresIbs',
          type: 'line',
          data: this.xNivInuClMresIbs,
          yAxis: 1
        }
      ]
    }
    this.chart = Highcharts.chart(this.chartTarget.nativeElement, this.config)
  }

}
