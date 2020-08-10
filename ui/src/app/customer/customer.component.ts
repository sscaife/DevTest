import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { CustomerModel } from '../models/customer.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  
  constructor(private customerService: CustomersService) { }

  customers$: Observable<CustomerModel[]>;

  ngOnInit(): void {
    this.customers$ = this.customerService.GetCustomers();
  }

  customerSaved(evt) {
    this.customers$ = this.customerService.GetCustomers();
  }

}
