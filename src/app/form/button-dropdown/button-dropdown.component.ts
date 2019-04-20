import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-dropdown',
  templateUrl: './button-dropdown.component.html',
  styleUrls: ['./button-dropdown.component.scss']
})
export class ButtonDropdownComponent implements OnInit {
  @Input() filterOptions:Array<any>;
  @Input() selectedOptions: String;
  @Input() btnClass: String;
  @Output() onClick = new EventEmitter<any>();

  constructor(  private router: Router) { 
  }
  ngOnInit() {

  }

  clickOption(item) {
    if(this.btnClass === 'jumpAnotherTask-btn'){
      if(item.id === '347') {
        let selectedRoute = item.url.split('#')[1].split('?')[0];
        this.router.navigate([selectedRoute]);
      } else {
      }
    } else {
      this.onClick.emit(item);
    }
  }
}
