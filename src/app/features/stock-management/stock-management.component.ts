import { Component, OnInit } from '@angular/core';
import { userProfileServices } from '../../services/userProfile.services';
import { stkRoutingServices } from '../../services/stkRouting.services';

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.css'],
  providers: [userProfileServices, stkRoutingServices]
})
export class StockManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
