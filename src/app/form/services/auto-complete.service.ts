import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutoCompleteService {

  constructor(private http: HttpClient) { }
  getAutoCompleteResult() {
    return this.http.get('assets/json/autoCompleteResult.json');
  }
}
