import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaveQueriesService {

  constructor(private http: HttpClient) { }
  deleteQuery(url) {
    return this.http.delete(url);
  }
  markAndUnmarkDefault(url){
    return this.http.get(url);
  }
}
