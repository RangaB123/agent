import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

const httpOptions = {
  header: new HttpHeaders({ 'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: HttpClient) { }
  private baseURL: string = '';
  httpPost(apiName: string, reqObj: Object){
    return this._http.post(this.baseURL+apiName, reqObj)
  }
  httpGet(apiName: string){
    return this._http.get(this.baseURL+apiName)
  }
}
