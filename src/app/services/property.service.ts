import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PropertyService {

  constructor(private http:Http) { }



  public getProperty(): Observable<any>{
      var jsonFile = "../assets/mock-property-data.json";
      var response = this.http.get(jsonFile)
                      .map(resp => resp.json())
                      .catch(this.handleError);
      return response;
    
  }

  private handleError(error : any): Observable<any>{
    console.error('An error occured', error);
    return Observable.throw(error.message || error);;

  }
  
}

