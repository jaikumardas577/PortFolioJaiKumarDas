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
import { ToastrModule } from 'ngx-toastr';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MyModalComponent } from './my-modal/my-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';




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
    AnnimationComponent,
    MyModalComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, config),
    ProfileModule,
    HttpClientModule,
    FontAwesomeModule,
    AngularSvgIconModule,
    ToastrModule,
    MatSnackBarModule,
    MatDialogModule,
    MatChipsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  exports : [MatDialogModule,MatChipsModule],
  entryComponents: [MyModalComponent]
})
export class AppModule { }
