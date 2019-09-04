import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  slideIndex = 1;



  constructor() {
  }

  ngOnInit() {
    this.showSlides(this.slideIndex);
    setInterval(() => {
      if (this.slideIndex === 2) {
        this.slideIndex = 0;
      }
      this.slideIndex = this.slideIndex + 1;
      this.showSlides(this.slideIndex);
    }, 5000);
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      // slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[this.slideIndex - 1].className = slides[this.slideIndex - 1].className.replace(' mySlides', 'showmySlides');
    dots[this.slideIndex - 1].className += ' active';
  }
}
