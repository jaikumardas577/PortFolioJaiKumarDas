import { Component, OnInit,Renderer2,ElementRef } from '@angular/core';
import { ProfileService } from '../profile.service';
import { SnotifyService } from 'ng-snotify';
import { environment } from '../../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { AlertService } from 'ngx-alerts';
import {NgForm} from '@angular/forms';



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
  name = "";
  email = "";
  contact = "";
  // validation_msg = "<p>Name length must be greater than 3 character</p><p>Invalid email</p><p>Must be greater than 50 characters</p>"

  constructor(private alertService: AlertService){}
  showAlerts(msg): void{
    // For normal messages
    // console.log("Running")
    this.alertService.info(msg);
    // this.alertService.info('this is an info alert');
    // this.alertService.danger('this is a danger alert');
    // this.alertService.success('this is a success alert');
}

  ngOnInit() {
    this.formStatus = "none"
    this.hideform = false
    this.submitText = "Submit"
    
    
     }
     submitform(myform){
      // this.formStatus = "grid"
      // this.hideform = true
      this.submitText = "Submit"
      if (this.name.length == 0 || this.email.length == 0 || this.contact.length == 0 ){
        this.showAlerts("Please filled up all the fields !")
        myform.resetform()
        this.name = "";
        this.email = "";
        this.contact = "";
      }

      if (this.validateEmail(this.email) && this.validateMessage(this.contact) && this.validateName(this.name)){

      this.alertService.success('Hurray! Your message has been recieved');
      myform.resetform()
      this.name = "";
      this.email = "";
      this.contact = "";

      }
      else{
            this.alertService.danger('Please filled the form.');
            myform.resetform()
            this.name = "";
            this.email = "";
            this.contact = "";

      }



      }
      // console.log(this.validateEmail(this.email))
      // console.log(this.validateName(this.name))

      // this.openSnackBar()
    //  }


    //  validate email
  validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

  validateName(name){
    return (name.length >= 3)? true : false
    }


  validateMessage(contact){
      return (contact.length >= 20)? true : false
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