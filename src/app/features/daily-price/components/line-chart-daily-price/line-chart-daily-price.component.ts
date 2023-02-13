import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts';
import {Charofchart} from "../../models";

@Component({
  selector: 'app-line-chart-daily-price',
  templateUrl: './line-chart-daily-price.component.html',
  styleUrls: ['./line-chart-daily-price.component.scss']
})
export class LineChartDailyPriceComponent implements OnInit , AfterViewInit, OnChanges{

  @ViewChild('target')


  chartTarget: ElementRef<any>
  config: Highcharts.Options
  chart: Highcharts.Chart

  @Input() dataChart: number[] = [];
  @Input() namechart: string[] = [];


  // data: any[] = [
  //   [new Date(2015, 0, 1), Math.random()*100],
  //   [new Date(2015, 0, 2), Math.random()*100],
  //   [new Date(2015, 0, 3), Math.random()*100],
  //   [new Date(2015, 0, 4), Math.random()*100],
  //   [new Date(2015, 0, 5), Math.random()*100],
  //   [new Date(2015, 0, 6), Math.random()*100],
  //   [new Date(2015, 0, 7), Math.random()*100],
  //   [new Date(2015, 0, 8), Math.random()*100],
  //   [new Date(2015, 0, 9), Math.random()*100],
  //   [new Date(2015, 0, 10), Math.random()*100]
  // ]




  ngOnInit(){
    console.log('this.newData2',this.dataChart)
    console.log('this.newName2',this.namechart)

  }

  ngAfterViewInit(){

    this.config = {
      chart: {
        type: 'line'
      },
      xAxis: {
        // type: 'datetime',
        // dateTimeLabelFormats: {
        //   month: '%e. %b',
        //   year: '%b'
        // }
        reversed: true,
        categories: this.namechart,
        labels: {
          rotation: 10,
        }

      },
      series: [
        {
          name: 'pdrCotVal',
          type: 'line',
          data: this.dataChart,
        }
      ]
    }

    this.chart = Highcharts.chart(this.chartTarget.nativeElement, this.config)

  }

  ngOnChanges(){
    // @ts-ignore
    // Highcharts.chart('container', {
    //
    //   title: {
    //     text: 'U.S Solar Employment Growth by Job Category, 2010-2020',
    //     align: 'left'
    //   },
    //
    //   subtitle: {
    //     text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>',
    //     align: 'left'
    //   },
    //
    //   yAxis: {
    //     title: {
    //       text: 'Number of Employees'
    //     }
    //   },
    //
    //   xAxis: {
    //     // reversed: true,
    //     // categories: this.namechart,
    //     // labels: {
    //     //   rotation: 10,
    //     // },      // reversed: true,
    //     categories: this.namechart,
    //     // labels: {
    //     //   rotation: 10,
    //     // },
    //
    //     accessibility: {
    //       rangeDescription:  this.namechart
    //     }
    //   },
    //
    //   legend: {
    //     layout: 'vertical',
    //     align: 'right',
    //     verticalAlign: 'middle'
    //   },
    //
    //   plotOptions: {
    //     series: {
    //       label: {
    //         connectorAllowed: false
    //       },
    //       pointStart: 2010
    //     }
    //   },
    //
    //   series: [{
    //     name: 'Installation & Developers',
    //     data: this.dataChart
    //   }
    //   // , {
    //   //   name: 'Manufacturing',
    //   //   data: [24916, 37941, 29742, 29851, 32490, 30282,
    //   //     38121, 36885, 33726, 34243, 31050]
    //   // }, {
    //   //   name: 'Sales & Distribution',
    //   //   data: [11744, 30000, 16005, 19771, 20185, 24377,
    //   //     32147, 30912, 29243, 29213, 25663]
    //   // }, {
    //   //   name: 'Operations & Maintenance',
    //   //   data: [null, null, null, null, null, null, null,
    //   //     null, 11164, 11218, 10077]
    //   // }, {
    //   //   name: 'Other',
    //   //   data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
    //   //     17300, 13053, 11906, 10073]
    //   // }
    //   ],
    //
    //   responsive: {
    //     rules: [{
    //       condition: {
    //         maxWidth: 500
    //       },
    //       chartOptions: {
    //         legend: {
    //           layout: 'horizontal',
    //           align: 'center',
    //           verticalAlign: 'bottom'
    //         }
    //       }
    //     }]
    //   }
    //
    // });
  }





}
