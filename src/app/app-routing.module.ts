import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';
import {AboutComponent } from './profile/about/about.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { ProjectsComponent } from './profile/projects/projects.component';
import {ExperienceComponent} from './profile/experience/experience.component';
import {ContactComponent} from './profile/contact/contact.component'



const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'skill', component: SkillsComponent },
  { path: 'project', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'experience', component: ExperienceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,MatChipsModule]
})
export class AppRoutingModule {

 }
