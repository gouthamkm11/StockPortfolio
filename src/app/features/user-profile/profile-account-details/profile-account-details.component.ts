import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-account-details',
  templateUrl: './profile-account-details.component.html',
  styleUrls: ['./profile-account-details.component.css']
})
export class ProfileAccountDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  buyingPower:string='Buying Power';
  withdrawableCash:string='Withdrawable Cash';
}
