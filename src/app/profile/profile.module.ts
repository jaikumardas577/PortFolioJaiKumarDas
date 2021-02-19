import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ProfileComponent } from './profile.component';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ReferenceComponent } from './reference/reference.component';
import { ContactComponent } from './contact/contact.component';
import { NgxSpinnerModule } from '../../../node_modules/ngx-spinner';
import { ProjectsComponent } from './projects/projects.component';
import { MatrixComponent } from './matrix/matrix.component';
import { ChartsModule,ThemeService } from 'ng2-charts';
import { AngularSvgIconModule } from 'angular-svg-icon';
// import { ToastrModule } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import { AlertModule } from 'ngx-alerts';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './../../app/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SnotifyModule,
    NgxSpinnerModule,
    ChartsModule,
    AngularSvgIconModule,
    MatSnackBarModule,
    ToastrModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'}),
    NgxSpinnerModule,
    MatChipsModule,
    AppRoutingModule
    

  ],
  declarations: [
    ProfileComponent,
    // HeaderComponent,
    // FooterComponent,
    // IntroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ReferenceComponent,
    ContactComponent,
    ProjectsComponent,
    MatrixComponent,
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},ThemeService ,
    SnotifyService,
    ChartsModule,
    ToastrModule
  ]
})
export class ProfileModule { }
