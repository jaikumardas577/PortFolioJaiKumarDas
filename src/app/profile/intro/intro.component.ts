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


  constructor() { }

  ngOnInit() {
    // setTimeout(function(){this.image2loading = true,
    //   alert("chwnges")}, 10000);

    var textHolder = document.getElementsByClassName('neon')[0];
    // debugger;
    let text = textHolder.innerHTML;
    let chars = text.length;
    let newText = '';
    let i;
    for (i = 0; i < chars; i += 1) {
      newText += '<i>' + text.charAt(i) + '</i>';
    }
    textHolder.innerHTML = newText;
    var letters = document.getElementsByTagName('i');
    let flickers = [5, 7, 9, 11, 13, 15, 17];
    let randomLetter;
    let flickerNumber;
    let counter;
    loop(letters, flickers);
  }


}











function randomFromInterval(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function hasClass(element, cls) {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function flicker(flickerNumber, randomLetter) {
  var counter = counter + 1;

  if (counter === flickerNumber) {
    return;
  }

  setTimeout(function () {
    if (hasClass(randomLetter, 'off')) {
      randomLetter.className = '';
    }
    else {
      randomLetter.className = 'off';
    }

    flicker(flickerNumber, randomLetter);
  }, 30);
}

function loop(letters, flickers) {
  var rand = randomFromInterval(500, 3000);

  let randomLetter = randomFromInterval(0, 3);
  randomLetter = letters[randomLetter];

  let flickerNumber = randomFromInterval(0, 6);
  flickerNumber = flickers[flickerNumber];

  setTimeout(function () {
    let counter = 0;
    flicker(flickerNumber, randomLetter);
    loop(letters, flickers);
  }, rand);
};


