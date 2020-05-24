import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  displaystatusProgramming = "none"
  displaystatusWebDeveopment = "none"
  displaystatusDevops = "none"
  displaystatusClouds = "none"
  displaystatusML = "none"
  displaystatusRest = "none"
  displaystatusScrap = "none"
  public pieChartOptions: ChartOptions = {
    
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'bottom',
      labels: {
        // This more specific font property overrides the global property
        fontColor: 'white',
        fontSize:20
    }
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartDataProgramming: number[] = [500, 300, 200];
  public pieChartDataWeb: number[] = [200, 200, 500,300];
  public pieChartDataMl: number[] = [300, 300, 300,300,300];
  public pieChartDataDevops: number[] = [300, 300, 300,300,300];
  public pieChartDataClouds: number[] = [300, 300, 300,300,300,300];
  public pieChartDataRest: number[] = [500, 300, 300];
  public pieChartDataScrap: number[] = [300, 300, 300];
  public pieChartTypeProgramming: ChartType = 'pie';
  public pieChartLabelsProgramming: Label[] = ['Python', 'JavaScript', 'C++'];
  public pieChartLabelsRest: Label[] = ['Django RF','Express', 'Flask'];
  public pieChartLabelsWeb: Label[] = ['HTML','Css', 'Django','NodeJS'];
  public pieChartLabelsMl: Label[] = ['Octave','Feature Engineering', 'Model Tuning','Model Selection','OpenCV'];
  public pieChartLabelsDevops: Label[] = ['CI CD','GIT', 'AWS Code Build','Linux','AWS Code Deploy'];
  public pieChartLabelsClouds: Label[] = ['AWS Lambda', 'AWS Kinesis', 'AWS CodeCommit',"AWS CodePipeline",'AWS Textract','AWS CloudWatch'];
  public pieChartLabelsScrap: Label[] = ['Beautiful Soup','Scrapy','Frontera']
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColorsProgramming = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ]
  public pieChartColorsWeb = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)','rgba(255, 0, 255,0.3)'],
    },
  ]
  public pieChartColorsDevops = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)','rgba(255, 0, 255,0.3)','rgba(255, 0, 255,0.3)'],
    },
  ]
  public pieChartColorsMl = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)','rgba(255, 0, 255,0.3)','rgba(255, 0, 255,0.3)'],
    },
  ]
  public pieChartColorsRest = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ]
  public pieChartColorsCloud = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)','rgba(255, 0, 255,0.3)','rgba(255, 0, 255,0.3)','rgba(255, 0, 255,0.3)'],
    },
  ]

  public pieChartColorsScrap = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)','rgba(255, 0, 255,0.3)','rgba(255, 0, 255,0.3)'],
    },
  ]
  

  constructor() { }

  ngOnInit() {
    this.displaystatusProgramming = "none"
    this.displaystatusWebDeveopment = "none"
    this.displaystatusDevops = "none"
    this.displaystatusClouds = "none"
    this.displaystatusML = "none"
    this.displaystatusRest = "none"
    this.displaystatusScrap = "none"

  }
  enableProgramming(){
    console.log("Running")
    this.displaystatusProgramming = "grid"
    this.displaystatusWebDeveopment = "none"
    this.displaystatusDevops = "none"
    this.displaystatusClouds = "none"
    this.displaystatusML = "none"
    this.displaystatusRest = "none"
    this.displaystatusScrap = "none"

 

  }
  enableWebDevelopment(){
    console.log("Running")
    this.displaystatusProgramming = "none"
    this.displaystatusWebDeveopment = "grid"
    this.displaystatusDevops = "none"
    this.displaystatusClouds = "none"
    this.displaystatusML = "none"
    this.displaystatusRest = "none"
    this.displaystatusScrap = "none"

  }
  enableDevops(){
    console.log("Running")
    this.displaystatusProgramming = "none"
    this.displaystatusWebDeveopment = "none"
    this.displaystatusDevops = "grid"
    this.displaystatusClouds = "none"
    this.displaystatusML = "none"
    this.displaystatusRest = "none"
    this.displaystatusScrap = "none"
  }
  enableRest(){
    console.log("Running")
    this.displaystatusProgramming = "none"
    this.displaystatusWebDeveopment = "none"
    this.displaystatusDevops = "none"
    this.displaystatusClouds = "none"
    this.displaystatusML = "none"
    this.displaystatusRest = "grid"
    this.displaystatusScrap = "none"
  }
  enableML(){
    console.log("Running")
    this.displaystatusProgramming = "none"
    this.displaystatusWebDeveopment = "none"
    this.displaystatusDevops = "none"
    this.displaystatusClouds = "none"
    this.displaystatusML = "grid"
    this.displaystatusRest = "none"
    this.displaystatusScrap = "none"
  }
  enableClouds(){
    console.log("Running")
    this.displaystatusProgramming = "none"
    this.displaystatusWebDeveopment = "none"
    this.displaystatusDevops = "none"
    this.displaystatusClouds = "grid"
    this.displaystatusML = "none"
    this.displaystatusRest = "none"
    this.displaystatusScrap = "none"
  }

  enableScrapping(){
    console.log("Running")
    this.displaystatusProgramming = "none"
    this.displaystatusWebDeveopment = "none"
    this.displaystatusDevops = "none"
    this.displaystatusClouds = "none"
    this.displaystatusML = "none"
    this.displaystatusRest = "none"
    this.displaystatusScrap = "grid"
  }

}
