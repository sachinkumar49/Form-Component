import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-button-group',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonConfig;
  @Input() formRefrence:any;
  @Output() onClick = new EventEmitter<any>();
  @Output() onFocus = new EventEmitter<any>();
  @Output() onBlur = new EventEmitter<any>();
  constructor() {
 }
  ngOnInit() {
    //console.log(this.formRefrence.status);
    if(this.formRefrence)
    {
      this.buttonConfig.forEach(function(button) {
       
      })
    }
  }
  onFocusEvent(item,e){
    this.onFocus.emit({item:item,event:e});
  }
  onBlurEvent(item,e){
    this.onBlur.emit({item:item,event:e});
  }
  onClickEvent(item,e){
  this.onClick.emit({item:item,event:e});
  }
    
}
