import { Injectable } from '@angular/core';
import { FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BuildRequestService {

  constructor() { }
  
  objToArray(data) {
    const arr = [];
    data.forEach(item => {
     arr.push(item.id);
    });
    return arr;
  }
  build(currentValue, initialObject) {
    const $this = this;
      const _fields = [];
       initialObject.forEach(function(item, index) {
        if (currentValue[item.id] && currentValue[item.id] !== '-1') {
        if (item.type === 'select' ||  item.type === 'buttonDropDown') {
          _fields.push({
            'id': item['id'],
            'value': currentValue[item.id].id,
            'operator': 'equalsTo'
          });
        } else if (item.type === 'text' || item.type === 'textarea' || item.type === 'number' || item.type === 'radio' ) {
          _fields.push({
            'id': item['id'],
            'value': currentValue[item.id],
            'operator': 'equalsTo'
          });
        } else if (item.type === 'checkbox' || item.type === 'multiSelect') {
          _fields.push({
            'id': item['id'],
            'multipleValue': $this.objToArray(currentValue[item.id]),
            'operator': 'equalsTo'
          });
        } else if (item.type === 'date') {
          const dateObject1 = $this.modifyDate(currentValue[item.id][0]);
          const dateObject2 = $this.modifyDate(currentValue[item.id][1]);
          _fields.push({
            'id': item['id'],
            'value': dateObject1 + '-' + dateObject2,
            'operator': 'equalsTo'
          });
        } else if (item.type === 'hidden' && item.value) {
          _fields.push({
            'id': item['id'],
            'value': item['value'],
            'operator': 'equalsTo'
          });
        }  else if (item.type === 'money' && item.value) {
          item.value = currentValue[item.id].replace (/,/g, '');
          _fields.push({
            'id': item['id'],
            'value': parseFloat(item['value']),
            'operator': 'equalsTo'
          });
      }
   }
      });
      return _fields;
    };
    modifyDate(date,format = "mm/dd/yyyy") {
      let month = date.getMonth()+1;
      let day = date.getDate();
      if(month.toString().length==1){
        month = "0"+month;
      }
      if(date.toString().length==1){
        day = "0"+day;
      }
      let year = date.getFullYear();
      return month+'/'+day+'/'+year;
  }
    
	advanceFormBuild(controlObject, formData) {
		const finalFormData =[];
		const arrayControl = controlObject.get('arrayAlias') as FormArray;
    	  formData.forEach((element,index) => {
          console.log(element);
        if (element.id.toLowerCase() !== 'addcriteria') {
          const  currentControl = arrayControl.controls[index];
          finalFormData.push(this.childBuild(currentControl.value, element));
        }
	});
	return finalFormData;
	}
    private childBuild(values, formItems) {
	  const buildObject = {};
	  const controlField = values[formItems.id];
      if (formItems.fields) {
          buildObject['id'] = formItems.id;
          formItems.fields.forEach(element => {
          if (element.operator) {
            buildObject['operator'] = controlField[element.id];
          } else {
			buildObject['operator'] = buildObject['operator'] || 'equalsTo';
			buildObject['value'] = controlField[element.id];
          }
          });
	  }
	  return buildObject;
    }
}
