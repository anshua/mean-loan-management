import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    console.log('ngonit');
    const a = this.customerService.getCustomers();
    a.subscribe(console.log);
  }

}
