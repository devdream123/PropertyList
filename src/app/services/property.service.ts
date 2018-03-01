import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { httpFactory } from '@angular/http/src/http_module';

@Injectable()
export class PropertyService {
  private JSON_FILE = "../assets/mock-property-data.json";
  private HTTP_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  constructor(private http:HttpClient) { }

  public getProperty(): Observable<any>{
    var response = this.http.get(this.JSON_FILE)
                            .catch(this.handleError);
    return response;
  }

  public addProperty(property): Observable<any>{
   
    var addPropertyRequest =this.http.post(this.JSON_FILE, property, this.HTTP_OPTIONS)
                                     .catch(this.handleError);
    return addPropertyRequest;
  }

  public removeProperty(property): Observable<any>{
    const url = `${this.JSON_FILE}/saved/${property.id}`;
    var removePropertyRequest = this.http.delete(this.JSON_FILE, this.HTTP_OPTIONS)
                                          .catch (this.handleError);

    return removePropertyRequest;
  }

  private handleError(error : any): Observable<any>{
    console.error('An error occured', error);
    return Observable.throw(error.message || error);;
  }
}

