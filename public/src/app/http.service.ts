import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
    
  }
    createGold(idAttr){
      console.log("made it to service", idAttr)
      return this._http.get('/create/'+idAttr)
    }
}
