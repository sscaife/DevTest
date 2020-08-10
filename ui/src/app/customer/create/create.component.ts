import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomersService } from '../../services/customers.service';
import { CustomerTypeModel } from '../../models/customer-types.model';
import { CustomerModel } from '../../models/customer.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-customer-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  @Output() saveEvent = new EventEmitter<boolean>();
  constructor(private fb: FormBuilder, private customerService: CustomersService) { }

  customerTypes$: Observable<CustomerTypeModel[]>;

  customerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    customerType: [null, Validators.required]
  });

  ngOnInit(): void {

    this.customerTypes$ = this.customerService.GetCustomerTypes();

  }

  createCustomer(): void {
    const formObj = new CustomerModel();

    formObj.name = this.customerForm.value.name;
    formObj.customerTypeId = Number(this.customerForm.value.customerType);

    this.customerService.SaveCustomer(formObj).subscribe(o => {
      this.saveEvent.emit(true);
    });
  }

}
