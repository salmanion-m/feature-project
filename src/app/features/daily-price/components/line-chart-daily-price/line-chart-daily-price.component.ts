import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart-daily-price',
  templateUrl: './line-chart-daily-price.component.html',
  styleUrls: ['./line-chart-daily-price.component.scss']
})
export class LineChartDailyPriceComponent implements OnInit, AfterViewInit, OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
      throw new Error('Method not implemented.');
  }

  @ViewChild('target')


  chartTarget: ElementRef<any>
  config: Highcharts.Options
  chart: Highcharts.Chart


  @Input() pClosing: number[] = [];
  @Input() namechart: string[] = [];
  @Input() xNivInuClMresIbs: number[] = [];


  ngOnInit() {
    console.log('this.newData2', this.pClosing);
    console.log('this.newName2', this.namechart);
    console.log('xNivInuClMresIbs', this.xNivInuClMresIbs)

  }

  ngAfterViewInit() {

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
        // reversed: true,
        categories: this.namechart,
        labels: {
          rotation: 10,
        }
      },
      series: [
        {
          name: 'pClosing',
          type: 'line',
          data: this.pClosing,
        },
        {
          name: 'xNivInuClMresIbs',
          type: 'line',
          data: this.xNivInuClMresIbs,
        }
      ]
    }
    this.chart = Highcharts.chart(this.chartTarget.nativeElement, this.config)
  }






}
