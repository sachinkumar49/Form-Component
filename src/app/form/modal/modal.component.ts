import { Component, OnInit, EventEmitter, Input, Output, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() modalId;
  @Input() modalWidth;
  @Output() closeModal = new EventEmitter();
  public display; 
  public backdrop;
  constructor(private ele: ElementRef) {
    // $("#"+ this.modalId).on("hidden.bs.modal", function(){
    //   this.closeModal.emit({});
    // });
   }
  ngOnInit() {
    this.modalId = this.modalId || "myModal";
  }

  open(background) {
   // $("#"+ this.modalId).modal(background);
  }
  close() {
   // $("#"+ this.modalId).modal('hide');
  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {

  }

}
