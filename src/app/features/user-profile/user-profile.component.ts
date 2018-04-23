import { Component, OnInit } from '@angular/core';
import { userProfileServices } from '../../services/userProfile.services';
import { stkRoutingServices } from '../../services/stkRouting.services';
import { userProfile } from '../../models/userProfile.model';
import { stkOwned } from '../../models/stkOwned.model';
import { stkWathclist } from '../../models/stkWatchlist.model';
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
  userProfileDetails;//This model has current users details

  //Below two will get the account details
  userStocks;
  userOwnedstkDetails: stkOwned;//This model has current users owned stocks

  //Below two will get the account details
  userWatchlist;
  userWathcliststkDetails;//This model has current users watchlist stocks


  ngOnInit() {
    //This method will fetch profile data from mongoDB
    this.routing.getProfileDetails().subscribe((res)=>{
      this.userDetails = res;
      console.log(`User profile root component ${this.userDetails.profilePic}`);
      this.userProfileDetails = new userProfile(this.userDetails.username,this.userDetails.profilePic,this.userDetails.gender);
      this.routing.profileDetailsEmitter.emit(this.userProfileDetails);
    });
    
    //This method will fetch stocks in watchlist by user from mongoDB
    this.routing.getStkWatchlistDetails().subscribe((res)=>{
      this.userWatchlist = res;
      console.log(`user's watchlist details${this.userWatchlist.stocks}`);
      this.userWathcliststkDetails = new stkWathclist(this.userWatchlist.stocks);
      this.routing.stkWatchlistEmitter.emit(this.userWathcliststkDetails);
    });

    //This method will fetch stocks owned by user from mongoDB
    this.routing.getStkOwnedDetails().subscribe((res)=>{
      this.userStocks = res;
      console.log(`user owned stock details${this.userStocks}`);
      this.userOwnedstkDetails = new stkOwned(this.userStocks);
      this.routing.stkOwnedEmitter.emit(this.userOwnedstkDetails);
    });
  }
}
