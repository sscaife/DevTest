import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerTypeModel } from '../models/customer-types.model';
import { CustomerModel } from '../models/customer.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  apiUrl = "http://localhost:63235";

  constructor(private httpClient: HttpClient) { }

  public GetCustomerTypes(): Observable<CustomerTypeModel[]> {
    return this.httpClient.get<CustomerTypeModel[]>(`${this.apiUrl}/customer/types`);
  }

  public SaveCustomer(customer: CustomerModel) {
    console.log(customer);
    return this.httpClient.post<CustomerModel>(`${this.apiUrl}/customer`, customer);
  }

  public GetCustomers(): Observable<CustomerModel[]> {
    return this.httpClient.get<CustomerModel[]>(`${this.apiUrl}/customer`);
  }

  public GetCustomerById(id: number): Observable<CustomerModel> {
    return this.httpClient.get<CustomerModel>(`${this.apiUrl}/customer/${id}`);
  }
}

