import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor(private http: HttpClient) { }
  loadDefaultAdvanceData() {
    return this.http.get('assets/json/loadAdvanceFormData.json');
  }
  getSliderData() {
    return this.http.get('assets/json/saveSearchQuery.json');
  }
  getEditQueryData() {
    return this.http.get('assets/json/editQuery.json');
  }
  getAutoCompleteResult(){
    return this.http.get('assets/json/autoCompleteResult.json');
  }
  loadOperator(){
    return this.http.get('assets/json/loadOperator.json')
  }
  getSavedQueries(url) {
    return this.http.get(url);
  }
  getError(){
    return this.http.get('assets/json/formError.json') 
  }
}
