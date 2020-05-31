import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { SnotifyService } from 'ng-snotify';
import { environment } from '../../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 
  model: any = {};
  formStatus;
  hideform;
  durationInSeconds = 5;
  submitText = "Submit"

  constructor(){}


  ngOnInit() {
    this.formStatus = "none"
    this.hideform = false
    this.submitText = "Submit"
    
     }
     submitform(){
      // this.formStatus = "grid"
      // this.hideform = true
      this.submitText = "Submitted"
      // this.openSnackBar()
     }


  // snotifyConfig = environment.snotifyConfig;
  // model: any = {};

  // constructor(
  //   private profile: ProfileService,
  //   private snotify: SnotifyService
  // ) { }

  // ngOnInit() {
  // }

  // contact() {
  //   this.profile.contactus(this.model).subscribe(data => {
  //     if (data.status) {
  //       this.snotify.success(data.message, 'Success', this.snotifyConfig);
  //     } else {
  //       this.snotify.warning(data.message, 'Warning', this.snotifyConfig);
  //     }
  //   }, err => {
  //     this.snotify.error('Something went wrong. Try again later.', 'Error', this.snotifyConfig);
  //   });
  // }

}
export class PizzaPartyComponent {}