import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal,NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { EChartOption } from 'echarts';
// import {
//     NgbCalendar,
//     NgbCalendarHebrew, NgbDate,
//     NgbDatepickerI18n,
//     NgbDatepickerI18nHebrew,
//   } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-compare-company',
  templateUrl: './compare-company.component.html',
  styleUrls: ['./compare-company.component.css'],
//   providers: [
//     {provide: NgbCalendar, useClass: NgbCalendarHebrew},
//     {provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nHebrew}
// ]
})
export class CompareCompanyComponent implements OnInit {
  modelfrom: NgbDateStruct = {"year":2020,"month":4,"day":27};
  modelto: NgbDateStruct;
  items = [1];
  periodicity:string = "0";


  options = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: []
    },
    xAxis: [
        {
            type: 'category',
            data: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'Price Per Share(in Rs)',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: 'Price',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name: 'company1',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]  
        },
        {
            name: 'company2',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name: 'company1-Price',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint: {
              data: [
                  {type: 'max', name: 'max'},
                  {type: 'min', name: 'min'}
              ]
            },
            markLine: {
                data: [
                    {type: 'average', name: 'average'}
                ]
            }
        },
        {
          name: 'company2-Price',
          type: 'line',
          yAxisIndex: 1,
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
          markPoint: {
            data: [
                {type: 'max', name: 'max'},
                {type: 'min', name: 'min'}
            ]
          },
          markLine: {
              data: [
                  {type: 'average', name: 'average'}
              ]
          }
      }
    ]
}
  
  constructor() { }

  ngOnInit() {
    this.options.legend.data=['company1', 'company2', 'company1-Price','company2-Price'];
  }

  addCompany(){
    if(this.items.length>=1){
      this.items.push(this.items.length+1)
    }
  }

  delCompany(){
    if(this.items.length>=1){
      this.items.pop()
    }
  }

  onSubmit(compareForm){
    alert(JSON.stringify(compareForm.value))
  }
}
