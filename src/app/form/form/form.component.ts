import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() savedQueries;
  @Input() columnCount;
  @Input() formData;
  @Input() loadOperator;
  @Input() buttonConfig;
  @Input() urls;
  @Output() selectChange = new EventEmitter < any > ();
  @Output() selectBlur = new EventEmitter < any > ();
  @Output() selectFocus = new EventEmitter < any > ();
  @Output() selectHide = new EventEmitter < any > ();
  @Output() selectShow = new EventEmitter < any > ();
  @Output() selectClick = new EventEmitter < any > ();
  @Output() datePickerYearChange = new EventEmitter < any > ();
  @Output() datePickerBlur = new EventEmitter < any > ();
  @Output() datePickerFocus = new EventEmitter < any > ();
  @Output() datePickerClose = new EventEmitter < any > ();
  @Output() datePickerInput = new EventEmitter < any > ();
  @Output() datePickerTodayClick = new EventEmitter < any > ();
  @Output() datePickerClearClick = new EventEmitter < any > ();
  @Output() datePickerMonthChange = new EventEmitter < any > ();
  @Output() datePickerSelect = new EventEmitter < any > ();
  @Output() radioClick = new EventEmitter < any > ();
  @Output() textareaResize = new EventEmitter < any > ();
  @Output() multiselectChange = new EventEmitter < any > ();
  @Output() multiselectPanelShow = new EventEmitter < any > ();
  @Output() multiselectPanelHide = new EventEmitter < any > ();
  @Output() multiselectBlur = new EventEmitter < any > ();
  @Output() multiselectFocus = new EventEmitter < any > ();
  @Output() checkboxChange = new EventEmitter < any > ();
  @Output() formSubmit = new EventEmitter < any > ();
  @Output() clearForm = new EventEmitter< any > ();

  constructor() { }
  ngOnInit() {
    console.log(this.formData);
  }

  // checkboxEvent($event, item) {
  //   this.event.fire('checkboxChange', {
  //     event: $event,
  //     item: item
  //   });
  // }
  // datePickerBlurEvent($event, item) {
  //   this.event.fire('datePickerBlur', {
  //     event: $event,
  //     item: item
  //   });
  // }
  // datePickerClearClickEvent($event, item) {
  //   this.event.fire('datePickerClearClick', {
  //     event: $event,
  //     item: item
  //   });
  // }
  // datePickerCloseEvent($event, item) {
  //   this.event.fire('datePickerClose', {
  //     event: $event,
  //     item: item
  //   });
  // }
  // datePickerFocusEvent($event, item) {
  //   this.event.fire('datePickerFocus', {
  //     event: $event,
  //     item: item
  //   });
  // }
  // datePickerInputEvent($event, item) {
  //   this.event.fire('datePickerInput', {
  //     event: $event,
  //     item: item
  //   });
  // }
  // datePickerMonthChangeEvent($event, item) {
  //   this.event.fire('datePickerMonthChange', {
  //     event: $event,
  //     item: item
  //   });
  // }
  // datePickerSelectEvent($event, item) {
  //   this.event.fire('datePickerSelect', {
  //     event: $event,
  //     item: item
  //   });
  // }
  // datePickerTodayClickEvent($event, item) {
  //   this.event.fire('datePickerTodayClick', {
  //     event: $event,
  //     item: item
  //   });
  // }
  // datePickerYearChangeEvent($event, item) {
  //   this.event.fire('datePickerYearChange', {
  //     event: $event,
  //     item: item
  //   });
  // }
  // multiselectBlurEvent($event, item) {
  //   this.event.fire('multiselectBlur', {
  //     event: $event,
  //     item: item
  //   });
  // }
  // multiselectChangeEvent($event, item) {
  //   this.event.fire('multiselectChange', {
  //     event: $event,
  //     item: item
  //   });
  // }
  // multiselectFocusEvent($event, item) {
  //   this.event.fire('multiselectFocus', {
  //     event: $event,
  //     item: item
  //   });
  // }
  // multiselectPanelHideEvent($event, item) {
  //   this.event.fire('multiselectPanelHide', {
  //     event: $event,
  //     item: item
  //   });
  // }
  // multiselectPanelShowEvent($event, item) {
  //   this.event.fire('multiselectPanelShow', {
  //     event: $event,
  //     item: item
  //   });
  // }
  // selectBlurEvent($event, item) {
  //   this.event.fire('selectBlur', {
  //     event: $event,
  //     item: item
  //   });
  // }
  // selectChangeEvent($event, item) {
  //   this.event.fire('selectChange', {
  //     event: $event,
  //     item: item
  //   });
  // }
  // selectClickEvent($event, item) {
  //   this.event.fire('selectClick', {
  //     event: $event,
  //     item: item
  //   });
  // }
  // selectFocusEvent($event, item) {
  //   this.event.fire('selectFocus', {
  //     event: $event,
  //     item: item
  //   });
  // }
  // selectHideEvent($event, item) {
  //   this.event.fire('selectHide', {
  //     event: $event,
  //     item: item
  //   });
  // }
  // selectShowEvent($event, item) {
  //   this.event.fire('selectShow', {
  //     event: $event,
  //     item: item
  //   });
  // }
  // textareaResizeEvent($event, item) {
  //   this.event.fire('textareaResize', {
  //     event: $event,
  //     item: item
  //   });
  // }
  // radioButtonEvent($event, item) {
  //   this.event.fire('radioClick', {
  //     event: $event,
  //     item: item
  //   });
  // }
  formSubmitEvent(event) {
    this.formSubmit.emit({event: event});
  }
  formClearEvent(event) {
    this.clearForm.emit({event: event});
  }
}
