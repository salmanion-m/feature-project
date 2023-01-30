import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import * as Highcharts from "highcharts";
import {Charofchart} from "../../models";
import {MatTableDataSource} from "@angular/material/table";




@Component({
  selector: 'app-chart-daily',
  templateUrl: './chart-daily.component.html',
  styleUrls: ['./chart-daily.component.scss']
})
export class ChartDailyComponent implements OnInit,AfterViewInit {

  Highcharts: typeof Highcharts = Highcharts;

  @Input() dataChart: number[] = [];
  @Input() namechart: string[] = [];


  ngOnInit(): void {
    console.log('this.dataChart',this.dataChart);
    console.log('this.namechart',this.namechart);
  }

  ngAfterViewInit(): void {
    this.chart = Highcharts.chart(this.chartOption)
  }



  chart: Highcharts.Chart;
  chartOption: Highcharts.Options = {

    series:
      [
        {
          name : 'data of table' ,
          type: 'line',
          data: this.dataChart,
        }
      ],

    title: {
      text: 'U.S Solar Employment Growth by Job Category, 2010-2020',
      align: 'left'
    },

    subtitle: {
      text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>',
      align: 'left'
    },

    yAxis: {
      title: {
        text: 'Number of Employees'
      }
    },

    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 2010 to 2020'
      }
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },

    // series:
    // [
    //   {
    //   name: 'Installation & Developers',
    //   type: 'line',
    //   data: [this.dataChart]
    // }, {
    //   name: 'Manufacturing',
    //   type: 'line',
    //   data: [24916, 37941, 29742, 29851, 32490, 30282,
    //     38121, 36885, 33726, 34243, 31050]
    // }, {
    //   name: 'Sales & Distribution',
    //   type: 'line',
    //   data: [11744, 30000, 16005, 19771, 20185, 24377,
    //     32147, 30912, 29243, 29213, 25663]
    // }, {
    //   name: 'Operations & Maintenance',
    //   type: 'line',
    //   data: [null, null, null, null, null, null, null,
    //     null, 11164, 11218, 10077]
    // }, {
    //   name: 'Other',
    //   type: 'line',
    //   data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
    //     17300, 13053, 11906, 10073]
    // }
    // ],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }

  }




}
