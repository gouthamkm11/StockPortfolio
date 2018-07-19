import { Component, OnInit } from '@angular/core';
import { userProfileServices } from '../../services/userProfile.services';
import { stkRoutingServices } from '../../services/stkRouting.services';
import { IUser } from '../../models/IUser';
import { IStocksowned } from '../../models/IStocksowned';
import { IWatchlist } from '../../models/IWatchlist';
import { IAccountdetails } from '../../models/IAccountdetails';
import { Observable } from "rxjs";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [userProfileServices, stkRoutingServices]
})
export class UserProfileComponent implements OnInit {

  constructor(private routing:userProfileServices) { }
  //Below two will get the account details
  userAccounts;
  userAccountDetails;//This model has current user account.

  ngOnInit() {
    //This method will fetch profile data from mongoDB
    this.routing.getProfileDetails().subscribe((res)=>{
      this.routing.profileDetailsEmitter.emit(res);
    });
    
    //This method will fetch stocks in watchlist by user from mongoDB
    this.routing.getStkWatchlistDetails().subscribe((res)=>{
      this.routing.stkWatchlistEmitter.emit(res);
    });

    //This method will fetch stocks owned by user from mongoDB
    this.routing.getStkOwnedDetails().subscribe((res)=>{
      this.routing.stkOwnedEmitter.emit(res);
    });

    //This method will fetch account details form DB
    this.routing.getAccountDetails().subscribe((res)=>{
      this.routing.accountInformationEmitter.emit(res);
    });
  }
}
