import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  i: number;
  show1 = true;
  show2 = false;
  show3 = false;
  show4 = false;
  show5 = false;
  show6 = false;
  show7 = false;


  constructor() {
  }

  ngOnInit() {

    setInterval(() => {
      const random = Math.floor(Math.random() * 7);
      this.checkImage(random);
    }, 2500);
  }

  checkImage(index: number) {
    if (index === 0) {
      this.show1 = true;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
      this.show5 = false;
      this.show6 = false;
      this.show7 = false;
    }
    if (index === 1) {
      this.show1 = false;
      this.show2 = true;
      this.show3 = false;
      this.show4 = false;
      this.show5 = false;
      this.show6 = false;
      this.show7 = false;
    }
    if (index === 2) {
      this.show1 = false;
      this.show2 = false;
      this.show3 = true;
      this.show4 = false;
      this.show5 = false;
      this.show6 = false;
      this.show7 = false;
    }
    if (index === 3) {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = true;
      this.show5 = false;
      this.show6 = false;
      this.show7 = false;
    }
    if (index === 4) {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
      this.show5 = true;
      this.show6 = false;
      this.show7 = false;
    }
    if (index === 5) {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
      this.show5 = false;
      this.show6 = true;
      this.show7 = false;
    }
    if (index === 6) {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
      this.show5 = false;
      this.show6 = false;
      this.show7 = true;
    }

  }
}
