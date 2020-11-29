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
  }

  enableWebDevelopment(){

    this.allProject = Projects.Projects.filter(project => project.ProjectCategory.includes("Web Development"));
  }
  enableScrapping(){
    this.allProject = Projects.Projects.filter(project => project.ProjectCategory.includes("Scrapping"));

  }
  enableML(){
    this.allProject = Projects.Projects.filter(project => project.ProjectCategory.includes("Machine Learning"));

  }
  enableRest(){
    this.allProject = Projects.Projects.filter(project => project.ProjectCategory.includes("RestFul API"));

  }
  enableDevops(){
    this.allProject = Projects.Projects.filter(project => project.ProjectCategory.includes("Devops"));

  }

}
