import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../../models/user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor( private HttpClient: HttpClient ) { }

  // Method GET
  public fetchAllItems = ():Promise<any> => {
    return this.HttpClient.get(`${environment.apiUrl}/merchant/`)
    .toPromise()
    .then(this.getData)
    .catch(this.handleError);
  }

  // Get the API response
  private getData(res: any){
    return res || {};
  };

  // Get the API error
  private handleError(err: any){
    return Promise.reject(err.error);
  };
}
