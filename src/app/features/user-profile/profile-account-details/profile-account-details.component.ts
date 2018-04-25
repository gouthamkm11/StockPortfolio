import { Component, OnInit } from '@angular/core';
import { userProfileServices } from '../../../services/userProfile.services';

@Component({
  selector: 'app-profile-account-details',
  templateUrl: './profile-account-details.component.html',
  styleUrls: ['./profile-account-details.component.css']
})
export class ProfileAccountDetailsComponent implements OnInit {

  constructor(private _services:userProfileServices) { }

  ngOnInit() {
    this._services.accountInformationEmitter.subscribe((res)=>{
      this.buyingPower = res.buyingPower;
      this.portfolioValue = res.portfolioValue;
    })
  }

  buyingPower:string='';
  portfolioValue:string='';
}
