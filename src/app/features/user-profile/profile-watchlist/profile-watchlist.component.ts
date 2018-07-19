import { Component, OnInit } from '@angular/core';

//Importing user profile service to access profile related http request
import { userProfileServices } from '../../../services/userProfile.services';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-profile-watchlist',
  templateUrl: './profile-watchlist.component.html',
  styleUrls: ['./profile-watchlist.component.css']
})
export class ProfileWatchlistComponent implements OnInit {

  constructor(private _userProfileServices:userProfileServices) { }

  //Component properties
  initial:Array<{stock:string}>[]=[];
  stkList:Array<{stock:string}>[]=[];

  //Component Initialization Method
  ngOnInit() {
    this._userProfileServices.getStkWatchlistDetails().subscribe((res)=>{
      this.initial = res.stocks;
      let sizeofArray = this.initial.length;
      //This condition makes sure that the watchlist doesn't exceed more than 3 stocks in the list.
      if(sizeofArray>3)
      {
        this.stkList = this.initial.slice(0, 3);
      }
      else{
        this.stkList = this.initial;
      }
    })
  }
}
