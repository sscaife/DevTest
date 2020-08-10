import { CustomerModel } from './customer.model';

export interface JobModel {
  jobId: number;
  engineer: string;
  when: Date;
  customerId: number;
  customer: CustomerModel;
}
