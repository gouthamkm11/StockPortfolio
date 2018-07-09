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
  initial=[];
  ngOnInit() {
    this._userProfileServices.getStkWatchlistDetails().subscribe((res)=>{
      let ans = JSON.parse(res);
      this.initial = ans.stocks;
      let sizeofArray = this.initial.length;
      if(sizeofArray>5)
      {
        this.stkList = this.initial.slice(0, 5);
      }
      else{
        this.stkList = this.initial;
      }
    })
    // this._userProfileServices.getStkWatchlistDetails().subscribe((res)=>{
    //   //Here the return type is object.
    //   //So use console.dir to get the root of obj structure.
    //   //Response is a array
    //   console.log(`entire chucnk${res}`);
    //   this.initial = res;
    //   this.final = this.initial
    //   console.log(`stocks values ${this.final}`);      
    // });
  }
}
