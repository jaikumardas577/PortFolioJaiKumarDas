import { Component, OnInit } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  image1loading: boolean = true;
  image2loading: boolean = false;
  image3loading: boolean = false;
  image4loading: boolean = false;
  faDownload = "faDownload"

  GITHUBURL:string   = "https://github.com/jaikumardas577";
  TWITTERURL:string  = "https://twitter.com/jaikumardas577";
  LINKEDINURL:string = "https://www.linkedin.com/in/jai-kumar-das/";
  



  constructor() { }

  ngOnInit() {

  }
  openGithub(){
    window.open(this.GITHUBURL, "_blank");
  }

  openLinkdedin(){
    window.open(this.LINKEDINURL, "_blank");
  }

  opentwitter(){
    window.open(this.TWITTERURL, "_blank");
  }

}





