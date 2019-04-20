/**
 *  @author: Sachin Kumar
 *  @Date : 28th feb 2019
 *  @Description  : This service modify the json object as per backend requirement.
 *                  And Also added the reactive form validation to form data.
 * @function FormValidate,buildRequest
 * @service specific function modifyDate,getFieldIndex,objToArray
 */


import { Injectable } from '@angular/core';
import { FormControl, FormBuilder,  Validators, AsyncValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor( private fb: FormBuilder) { }

    FormValidation(formData, updateOn?, syncValidation?, asyncValidation?) {
        const group: any = {};
        formData.forEach(item => {
        let validationArray, child;
        if (item.fields) {
            child = this.FormValidation(item.fields);
        }
        if (child) {
            group[item.id] = child;
        } else {
            validationArray = this.onLoadValidation(item);
            group[item.id] = this.Validatate(item, validationArray);
        }
        });
        return  this.fb.group(group);
    }
    DynamicFormValidation(formData) {
        const dynamicArr = [];
        formData.forEach(item => {
        let group, validationArray;
        if (item.fields) {
            group =  this.FormValidation(item.fields);
        }
        if (group) {
            dynamicArr.push(group);
        } else {
            validationArray = this.onLoadValidation(item);
            dynamicArr.push(this.Validatate(item, validationArray));
        }
        });
        return  this.fb.group({
            arrayAlias : this.fb.array(dynamicArr)
        });
    }


    private onLoadValidation(item) {
        const validationArray = [];
        if (item.rules) {
        if (item.rules.required) {
            validationArray.push(Validators.required);
        }
        if (item.rules.min) {
            validationArray.push(Validators.min(item.rules.min));
        }
        if (item.rules.minLength) {
            validationArray.push(Validators.minLength(item.rules.minLength));
        }
        if (item.rules.max) {
            validationArray.push(Validators.max(item.rules.max));
        }
        if (item.rules.maxLength) {
            validationArray.push(Validators.maxLength(item.rules.maxLength));
        }
        }
        return validationArray;
    }
  // to create FromControl for a field;
    private Validatate(item,validationArray,updateOn = 'change') {
      let formControlObject ;
      if (validationArray.length) {
        formControlObject =  new FormControl({value : item.value || '', disabled : item.rules && item.rules.disabled || false },
                                { validators : Validators.compose(validationArray),
                                 updateOn: item.rules && item.rules.updateOn || updateOn});
        } else {
            formControlObject = new FormControl({value : item.value || '', disabled : item.rules && item.rules.disabled || false });
        }
        return formControlObject;
    }
}
