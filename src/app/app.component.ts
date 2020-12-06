import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  showloader 
  showcontent

  constructor(
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.showloader = 'grid';
    this.showcontent = "none"
    this.spinner.show();
    // alert("R")
    setTimeout(() => {
      this.showloader = 'none'
      this.showcontent = ""
        this.spinner.hide();
    }, 3000);
  }

}
