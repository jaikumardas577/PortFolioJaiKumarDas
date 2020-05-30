import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ReferenceComponent } from './reference/reference.component';
import { ContactComponent } from './contact/contact.component';
import { NgxSpinnerModule } from '../../../node_modules/ngx-spinner';
import { ProjectsComponent } from './projects/projects.component';
import { AnnimationComponent } from './annimation/annimation.component';
import { MatrixComponent } from './matrix/matrix.component';
import { ChartsModule } from 'ng2-charts';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ToastrModule } from 'ngx-toastr';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SnotifyModule,
    NgxSpinnerModule,
    ChartsModule,
    AngularSvgIconModule,
    MatSnackBarModule

  ],
  declarations: [
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ExperienceComponent,
    EducationComponent,
    ReferenceComponent,
    ContactComponent,
    ProjectsComponent,
    AnnimationComponent,
    MatrixComponent,
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    ChartsModule,
    ToastrModule
  ]
})
export class ProfileModule { }
