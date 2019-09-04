import {Component, OnInit} from '@angular/core';
import {ResourcePopupComponent} from '../resource-popup/resource-popup.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  openPopUp(index: number, forVide: boolean) {
    const modalRef = this.modalService.open(ResourcePopupComponent, {windowClass: 'resource-detail-popup', container: 'app-modal'});

    (<ResourcePopupComponent>modalRef.componentInstance).slideIndex = index;
    (<ResourcePopupComponent>modalRef.componentInstance).forVideo = forVide;
  }
}
