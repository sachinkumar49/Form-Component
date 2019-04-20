import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DefaultFormSettingService {

  getSettings(data) {
    data.forEach(element => {
      if(element.fields){
        this.getSettings(element.fields);
      }
      else{
      switch (element.type.toLowerCase()) {
        case 'number':
          element.keyFilter = 'num';
          element.type = 'text';
          break;
        case 'alphanumeric':
          element.keyFilter = 'alphanum';
          element.type = 'text';
          break;
        case 'email':
          element.keyFilter = 'email';
          element.type = 'text';
          break;
        case 'money':
          element.keyFilter = 'money';
          element.type = 'text';
          break;
        case 'select':
          {
            element.options.forEach((item, index) => {
              if (item.value && (item.value.id === null || item.value.id === '-1')) {
                const currentObject = item;
                const firstObject = element.options[0];
                element.options[index] = firstObject;
                element.options[0] = currentObject;
              } else if (item.value && item.value.id === element.value) {
                element.value = item.value;
              }
            });
            break;
          }
        case 'multiselect':
          {
            let selectedObject =[];
            element.options.map(arrayObject => {
              const keepGoing = element.multipleValues && element.multipleValues.some((item) => {
                return item === arrayObject.value.id;
              });
              if (keepGoing) {
                selectedObject.push(arrayObject.value);
              }
            });
            element.value = selectedObject;
            break;
          }
        case 'date':
          {
            if (element.value && element.value.indexOf('-') > -1) {
              const defaultDate = [];
              defaultDate.push(new Date(element.value.split('-')[0]));
              defaultDate.push(new Date(element.value.split('-')[1]));
              element.value = defaultDate;
            } else {
              element.value = element.value && new Date(element.value);
            }
            break;
          }
        default:
          element.keyFilter = /[^\n]+/;
      }
    }
    });
  return data;
  }
}
