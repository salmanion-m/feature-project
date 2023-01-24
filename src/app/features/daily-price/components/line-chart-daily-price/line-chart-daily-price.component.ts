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
        categories: this.namechart,
        labels: {
          rotation: 30,
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

  }




}
