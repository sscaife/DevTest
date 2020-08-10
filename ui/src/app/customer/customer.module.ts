import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CreateCustomerComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [CustomerComponent, CreateCustomerComponent, ViewComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule
  ],
  exports: [CreateCustomerComponent]
})
export class CustomerModule { }
