import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigUrls } from '../common/app-config';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  constructor(private http:HttpClient,private config:ConfigUrls) { }

  public makeRestCall(url:any){
     
    return this.http.get(url);
  }
}
