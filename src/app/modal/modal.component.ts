import {Component, ContentChild, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @ContentChild('modal', {read: TemplateRef}) modal;

  constructor() {
  }

  ngOnInit() {
  }

}
