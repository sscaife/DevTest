import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { CustomerModel } from '../../models/customer.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  customer$: Observable<CustomerModel>;
  constructor(private customerService: CustomersService, private route: ActivatedRoute) { }
  customerId: number;

  ngOnInit(): void {
    this.customerId = parseInt(this.route.snapshot.paramMap.get('id') || "", 10);
    this.customer$ = this.customerService.GetCustomerById(this.customerId);
  }

}
