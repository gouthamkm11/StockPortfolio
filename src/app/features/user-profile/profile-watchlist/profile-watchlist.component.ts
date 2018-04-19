import { Component, OnInit } from '@angular/core';
import { userProfileServices } from '../../../services/userProfile.services';
import { stkWathclist } from '../../../models/stkWatchlist.model';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-profile-watchlist',
  templateUrl: './profile-watchlist.component.html',
  styleUrls: ['./profile-watchlist.component.css']
})
export class ProfileWatchlistComponent implements OnInit {

  constructor(private _userProfileServices:userProfileServices) { }

  stkList=[];
  ngOnInit() {
    this._userProfileServices.stkWatchlistEmitter.subscribe((res)=>{
      //Here the return type is object.
      //So use console.dir to get the root of obj structure.
      let initial = res.stkSymbol;
      let sizeofArray = initial.length;
      if(sizeofArray>5)
      {
        this.stkList = initial.slice(0, 5);
      }
      else{
        this.stkList = initial;
      }
    });
  }
}
