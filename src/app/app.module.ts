import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnnimationComponent } from './annimation/annimation.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

// import { NgxAddchatModule } from  'ngx-addchat';



const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  declarations: [
    AppComponent,
    AnnimationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, config),
    ProfileModule,
    HttpClientModule,
    FontAwesomeModule,
    AngularSvgIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
