/**
 *  @author: Sachin Kumar
 *  @Date : 27th feb 2019
 *  @Description  : Component handles basic form.
 */

import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterContentChecked } from '@angular/core';
import { FormValidationService } from '../services/form-validation.service';
import { DecimalPipe } from '@angular/common';
import { DateLocaleService } from '../services/date-locale.service';
import { DefaultFormSettingService } from '../services/default-form-setting.service';
import { FormComponent } from '../form/form.component';
import { BuildRequestService } from '../services/build-request.service';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
  providers: [DecimalPipe]
})

export class BasicFormComponent extends FormComponent implements OnInit, OnChanges,AfterContentChecked {
  public basicFormControl;
  public locale;
  public basicFormData;

  constructor(private validationService: FormValidationService,
              private localeService: DateLocaleService,
              private defaultFormSettings: DefaultFormSettingService,
              private buildRequest: BuildRequestService,
              ) {
                super();
              }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.formData && changes.formData.currentValue) {
     this.loadForm(changes.formData.currentValue);
    }
  }
  ngOnInit() {}
  ngAfterContentChecked() {}

  loadForm(data) {
    this.locale = this.localeService.getLocale();
    this.basicFormData = this.defaultFormSettings.getSettings(data['items']);
    this.basicFormControl = this.validationService.FormValidation(this.basicFormData);
  }

  inputBlur(item, $event) {
    if (item.keyFilter === 'money') {
     // this.form.get(item.id).setValue(this.dm.transform(this.form.get(item.id).value, '1.2-2'));
    }
  }

  setDirty(form){
    for (const key in form.controls) {
        const control = form.controls[key];
        if(control.errors){
          control.markAsDirty();
        }
    }
  }

  applyServerErrors(data,form){
    for(let key in form.controls){
        if(data.hasOwnProperty(key)){
          form.controls[key].status = 'INVALID';
          form.controls[key].setErrors({'incorrect': data[key]});

        }
    }
  }
  formReset(buttonObject, form) {
    if (this.basicFormControl.status === 'INVALID') {
      this.setDirty(this.basicFormControl);
    } else {
      if (buttonObject.item.type === 'button') {
      this.basicFormControl.reset();
      this.clearForm.emit({
        formData: this.buildRequest.build(this.basicFormControl.value, this.basicFormData)
      });
    }
    if (buttonObject.item.type.toLowerCase() === 'submit') {
      this.formSubmit.emit({
        formData: this.buildRequest.build(this.basicFormControl.value, this.basicFormData)
      });
    }
  }
  }
}
