import { Component, OnInit } from '@angular/core';
import { userProfileServices } from '../../../services/userProfile.services';
import { stkRoutingServices } from '../../../services/stkRouting.services';

@Component({
  selector: 'app-profile-account-details',
  templateUrl: './profile-account-details.component.html',
  styleUrls: ['./profile-account-details.component.css']
})
export class ProfileAccountDetailsComponent implements OnInit {

  constructor(private _services:userProfileServices,private _routing:stkRoutingServices) { }

  ngOnInit() {
    this._services.accountInformationEmitter.subscribe((res)=>{
      this.buyingPower = res.buyingPower;
      this._routing.equityEmitter.subscribe((res)=>{
        this.portfolioValue = res;
      })
    })
  }

  buyingPower:Number=0;
  portfolioValue:Number=0;
}
