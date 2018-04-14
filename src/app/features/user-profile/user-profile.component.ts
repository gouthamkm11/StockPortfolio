import { Component, OnInit } from '@angular/core';
import { stkRoutingServices } from '../../services/stkRouting.services';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [stkRoutingServices]
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
