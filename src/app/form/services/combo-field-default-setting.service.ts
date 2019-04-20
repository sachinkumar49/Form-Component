import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComboFieldDefaultSettingService {

  constructor() { }
  default(field1, field2) {
    const field2Id = field2.id + '-2';
    const comboField = {};
    comboField['id'] = field2.id;
    comboField['type'] = 'combo';
    comboField['label'] = field2.label;
    comboField['fields'] = [{
      'id': field2.id + '-1',
      'type': 'select',
      'value': {'id': -1, 'value': '--select--'},
      'options': field1,
      'operator': true
    }, field2];
    comboField['fields'][1].id = field2Id;
    return comboField;
  }
}
