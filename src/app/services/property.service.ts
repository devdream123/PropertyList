import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class PropertyService {

  constructor(private http:HttpClient) { }

  public getProperty(): Observable<any>{
    var jsonFile = "../assets/mock-property-data.json";
    var response = this.http.get(jsonFile)
                            .catch(this.handleError);
    return response;
  }

  private handleError(error : any): Observable<any>{
    console.error('An error occured', error);
    return Observable.throw(error.message || error);;
  }
}

