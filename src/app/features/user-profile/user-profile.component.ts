import { Component, OnInit } from '@angular/core';
import { userProfileServices } from '../../services/userProfile.services';
import { stkRoutingServices } from '../../services/stkRouting.services';
import { IUser } from '../../models/IUser';
import { stkOwned } from '../../models/stkOwned.model';
import { IWatchlist } from '../../models/IWatchlist';
import { accountInfo } from '../../models/accountInfo.model';
import { Observable } from "rxjs";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [userProfileServices, stkRoutingServices]
})
export class UserProfileComponent implements OnInit {

  constructor(private routing:userProfileServices) { }

  //Below two will get the profile details
  userDetails;
  userProfileDetails:IUser;//This model has current users details

  //Below two will get the account details
  userStocks;
  userOwnedstkDetails: stkOwned;//This model has current users owned stocks

  //Below two will get the account details
  userWatchlist;
  userWathcliststkDetails;//This model has current users watchlist stocks

  //Below two will get the account details
  userAccounts;
  userAccountDetails;//This model has current user account.

  ngOnInit() {
    //This method will fetch profile data from mongoDB
    this.routing.getProfileDetails().subscribe((res)=>{
      this.routing.profileDetailsEmitter.emit(res);
      // this.userDetails = res;
      // console.log(`User profile root component ${this.userDetails.profilePic}`);
      // this.userProfileDetails = new userProfile(this.userDetails.username,this.userDetails.profilePic,this.userDetails.gender);      
    });
    
    //This method will fetch stocks in watchlist by user from mongoDB
    this.routing.getStkWatchlistDetails().subscribe((res)=>{
      this.routing.stkWatchlistEmitter.emit(res);
      // this.userWatchlist = JSON.parse(res);
      // console.log(`user's watchlist details${this.userWatchlist.stocks}`);
      // this.userWathcliststkDetails = new stkWathclist(this.userWatchlist.stocks);
      // this.routing.stkWatchlistEmitter.emit(this.userWathcliststkDetails);
    });

    //This method will fetch stocks owned by user from mongoDB
    this.routing.getStkOwnedDetails().subscribe((res)=>{
      this.userStocks = JSON.parse(res);
      console.log(`user owned stock details${this.userStocks.stocks}`);
      this.userOwnedstkDetails = new stkOwned(this.userStocks.stocks);
      this.routing.stkOwnedEmitter.emit(this.userOwnedstkDetails);
    });

    //This method will fetch account details form DB
    this.routing.getAccountDetails().subscribe((res)=>{
      this.userAccounts = res;
      console.log(`user owned stock details${this.userAccounts}`);
      this.userAccountDetails = new accountInfo(this.userAccounts);
      this.routing.accountInformationEmitter.emit(this.userAccountDetails);
    });
  }
}
