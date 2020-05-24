import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about_quote:string;
  primary_addresss:string;

  constructor() { 
    this.primary_addresss = "46-2B,Near Gangama Temple Balaji, H A Farm Post,Bhuvaneswari Nagar Dasarahalli,Bengaluru, Karnataka "
    // this.about_quote = "Currently i am a full stack software developer at DHIRA software lab with knowledge of Object Oriented Programming, Databases, DevOps,Various Framework and Cloud Enigneering. Here In Dhira, I have responsibility of developing efficient code both in frontend and backend,Designing Flows ,Scrapping data and Continuos Deployment in the AWS Platform.I have worked in plenty Machine learning and Web Development projects.I am technology enthusiast and a great lover of Automation. For Fun I love to play football, travel and surfing for good music in the internet."
    this.about_quote = "Hello World           Thanks for visiting my site.   i am a full stack software developer at DHIRA software lab                with knowledge of Object Oriented Programming, Databases, DevOps,Various Framework and Cloud Engineering.      Fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools."
  }

  ngOnInit() {

    

        // @link https://dev.to/5t3ph/helloworld-bat-vanillajs-plain-text-editor-25c7

        const main = document.querySelector("main");
        const hwArray = this.about_quote.split("");
        const msgArray = "".split("");
        const typeSpeed = 130;
        const hwDuration = typeSpeed * hwArray.length;
        const msgDuration = typeSpeed * msgArray.length;
        const msgDelay = hwDuration + 300;
        const newLineDelay = hwDuration + msgDuration + 300;
    
        // Type scripted messages
        const type = (msgArray, target) => {
          msgArray.map((l, i) => {
            const letter = document.createTextNode(l);
            const delay = typeSpeed * i;
    
            setTimeout(() => {
              main.querySelector(target).appendChild(letter);
            }, delay);
          });
        };
    
        // Clear cursor animation from previous line
        // Only works for new lines, doesn't work if you backspace to previous line
        const clearCursor = () => {
          document.querySelector(".cursor.active").classList.remove("active");
        };
    
        // Create new line
        const newLine = () => {
          const line = document.createElement("DIV");
          line.innerHTML = '<span class="cursor active"></span>';
          main.appendChild(line);
          clearCursor();
        };
    
        // Type initial greeting
        setTimeout(() => {
          type(hwArray, "span");
        }, 1000);
    
        // Type instructions
        setTimeout(() => {
          newLine();
          type(msgArray, "div span");
        }, msgDelay + 1000);
    
        // Type new line for user content
        setTimeout(() => {
          newLine();
        }, newLineDelay + 1000);
    
        // If new line, drop "active" class
        // from first active cursor to remove animation
        main.addEventListener("keydown", (e) => {
          const key = e.keyCode;
          if (key === 13) {
            setTimeout(() => {
              clearCursor();
            }, 10);
          }
        });
    
 
  }

}
