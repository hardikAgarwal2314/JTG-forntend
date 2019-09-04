import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resource-popup',
  templateUrl: './resource-popup.component.html',
  styleUrls: ['./resource-popup.component.css']
})
export class ResourcePopupComponent implements OnInit {
  slideIndex = 1;
  forVideo = false;
  showSpinner = true;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
    this.showSlides(this.slideIndex);
  }

  plusSlides(n) {
    if (this.slideIndex === 4) {
      this.slideIndex = 0;
    }
    this.showSlides(this.slideIndex += n);
  }

  revSlides(n) {
    if (this.slideIndex === 1) {
      this.slideIndex = 5;
    }
    this.showSlides(this.slideIndex -= n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    console.log(n);
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    console.log(slides);
  }

  closePopup() {
    this.activeModal.close();
  }
}
