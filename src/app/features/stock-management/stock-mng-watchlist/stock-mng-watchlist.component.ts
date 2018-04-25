import { Component, OnInit } from '@angular/core';
import { userProfileServices } from '../../../services/userProfile.services';

@Component({
  selector: 'app-stock-mng-watchlist',
  templateUrl: './stock-mng-watchlist.component.html',
  styleUrls: ['./stock-mng-watchlist.component.css']
})
export class StockMngWatchlistComponent implements OnInit {

  constructor(private _userProfileServices:userProfileServices) { }

  stkList=[];
  ngOnInit() {
    this._userProfileServices.getStkWatchlistDetails().subscribe((res)=>{
      let ans = JSON.parse(res);
      this.stkList = ans.stocks;
    })
  }

}
