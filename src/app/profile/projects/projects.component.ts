import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MyModalComponent } from '../../my-modal/my-modal.component';
import {MatChipsModule} from '@angular/material/chips';

import Projects from './projects.json';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  name: string;
  color: string;
  allProject:any;
  firstLayer:any;
  secondLayer:any;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyModalComponent, {
      width: '80vw',
      data: { Headline: "Headline", paragraph_primary: "paragraph_primary", paragraph_secondary:"paragraph_secondary" }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
  }

  ngOnInit() {
    console.log(Projects)
    this.allProject = Projects.Projects;
    debugger;
    this.firstLayer = this.allProject.slice(0,2);
    this.secondLayer = this.allProject.slice(2,this.allProject.length);

  }

  enableWebDevelopment(){

    this.allProject = Projects.Projects.filter(project => project.ProjectCategory.includes("Web Development"));
    this.firstLayer = this.allProject.slice(0,2);
    this.secondLayer = this.allProject.slice(2,this.allProject.length);
  }
  enableScrapping(){
    this.allProject = Projects.Projects.filter(project => project.ProjectCategory.includes("Scrapping"));
    this.firstLayer = this.allProject.slice(0,2);
    this.secondLayer = this.allProject.slice(2,this.allProject.length);

  }
  enableML(){
    this.allProject = Projects.Projects.filter(project => project.ProjectCategory.includes("Machine Learning"));
    this.firstLayer = this.allProject.slice(0,2);
    this.secondLayer = this.allProject.slice(2,this.allProject.length);

  }
  enableRest(){
    this.allProject = Projects.Projects.filter(project => project.ProjectCategory.includes("RestFul API"));
    this.firstLayer = this.allProject.slice(0,2);
    this.secondLayer = this.allProject.slice(2,this.allProject.length);

  }
  enableDevops(){
    this.allProject = Projects.Projects.filter(project => project.ProjectCategory.includes("Devops"));
    this.firstLayer = this.allProject.slice(0,2);
    this.secondLayer = this.allProject.slice(2,this.allProject.length);

  }

}
