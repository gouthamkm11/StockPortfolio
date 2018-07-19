import { Component, OnInit } from '@angular/core';
import { userProfileServices } from '../../../services/userProfile.services';
import { IWatchlist } from '../../../models/IWatchlist';

@Component({
  selector: 'app-stock-mng-watchlist',
  templateUrl: './stock-mng-watchlist.component.html',
  styleUrls: ['./stock-mng-watchlist.component.css']
})
export class StockMngWatchlistComponent implements OnInit {

  constructor(private _userProfileServices:userProfileServices) { }

  stkList:Array<{stock:string}>[]=[];
  ngOnInit() {
    this._userProfileServices.getStkWatchlistDetails().subscribe((res)=>{
      this.stkList = res.stocks
    })
  }

  reRender(event): void{
    this._userProfileServices.getStkWatchlistDetails().subscribe((res)=>{
      this.stkList = res.stocks;
    })
  }


  // removeItem(value:EventListener<any>){
  //   console.log(`eeeee${value}`);
  // }
}
