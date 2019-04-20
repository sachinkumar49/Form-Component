import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { FormComponent } from '../form/form.component';
import { FormValidationService } from '../services/form-validation.service';
import { DefaultFormSettingService } from '../services/default-form-setting.service';
import { AutoCompleteService } from '../services/auto-complete.service';
import { ComboFieldDefaultSettingService } from '../services/combo-field-default-setting.service';
import { BuildRequestService } from '../services/build-request.service';

@Component({
  selector: 'app-advance-form',
  templateUrl: './advance-form.component.html',
  styleUrls: ['./advance-form.component.scss']
})
export class AdvanceFormComponent extends FormComponent implements OnInit,OnChanges {
  searchResult;
  autoComplete;
  advanceFormControl;
  advanceFormData = [];
  @Input() loadOperator;
  @Output() Query = new EventEmitter <any>();
  constructor( private formValidation: FormValidationService,
               private defaultForm: DefaultFormSettingService,
               private autoComp: AutoCompleteService,
               private comboField: ComboFieldDefaultSettingService,
               private buildRequest: BuildRequestService) {
    super();
  }
  ngOnChanges(changes) {
    if (changes.formData && changes.formData.currentValue) {
      this.loadForm(changes.formData.currentValue);
    }
    if (changes.buttonConfig && changes.buttonConfig.currentValue) {
      this.buttonConfig.splice(1, 0, {'label': 'Save', 'type': 'save', 'severity': 'flat', 'icon': '', 'iconPos': '', 'id': 'save'});
    }
  }
  ngOnInit() { }
  private loadForm(data) {
    this.advanceFormData = [];
      data.items.forEach(element => {
        if (element.id !== 'addCriteria') {
          this.advanceFormData.push(this.getComboField(element));
        } else {
          this.advanceFormData.push(this.defaultForm.getSettings([element])[0]);
        }
      });
    this.advanceFormControl = this.formValidation.DynamicFormValidation(this.advanceFormData);
}
  autoCompleteSearch(e) {
    console.log(e);
    this.autoComp.getAutoCompleteResult().subscribe(data => {
      this.searchResult = data['items'];
    });
  }
  getComboField(field){
      const loadOperatorOption = this.loadOperator[field.operatorDataKey];
      const comboField = this.comboField.default(loadOperatorOption, field);
      comboField['fields'] = this.defaultForm.getSettings(comboField['fields']);
      return comboField;
  }
  selectedAutoComplete(e) {
    if (e.operatorDataKey) {
      const comboField = this.getComboField(e);
      this.advanceFormData.push(comboField);
      const currentFormControl = this.formValidation.FormValidation([comboField]);
      this.advanceFormControl.get('arrayAlias').push(currentFormControl);
      this.autoComplete = '';
    }
  }

  addingRules(e) {
    if (e.rules) {
         e.rules.disabled = true;
    } else {
        e.rules = {};
        e.rules.disabled = true;
    }
    return e;
  }
  selectChangeEvent(e, formData) {
    const currentFeldValue = this.advanceFormControl.value[formData.id];
    if (e.value.toLowerCase() === 'isempty') {
    this.advanceFormControl.get(formData.id).disable();
    formData.value = '';
    } else {
    this.advanceFormControl.get(formData.id).enable();
    formData.value = currentFeldValue;
    }
    formData.operator.value = e.value;
  }
  removeField(removableItem) {
    this.advanceFormData = this.advanceFormData.filter(function(item) {
    return item.id !== removableItem.id;
    });
    const currentControl = this.advanceFormControl.get('arrayAlias').controls;
    currentControl.forEach(element => {
        if (element.get(removableItem.id)) {
            currentControl.pop(element);
        }
    });
  }
  resetForm() {
      this.advanceFormData.forEach(element => {
        if(element.id.toLowerCase() !== 'addcreteria') {
          this.removeField(element);
        }
      });
  }
  buildResuestParam() {
    const finalFormObject = this.buildRequest.advanceFormBuild(this.advanceFormControl, this.advanceFormData);
    this.formSubmit.emit({'form': finalFormObject});
 }
 
  querySave(e) {
    const finalFormObject = this.buildRequest.advanceFormBuild(this.advanceFormControl, this.advanceFormData);
    //this.events.fire('saveQuery', finalFormObject);
  }
  AdvanceFormSearch(event){
      const item = event.item;
     if (item.type.toLowerCase() === 'submit') {
         this.buildResuestParam();
     } else if (item.type.toLowerCase() === 'save') {
         this.querySave(event);
     } else {
         this.resetForm();
     }
  }
}

