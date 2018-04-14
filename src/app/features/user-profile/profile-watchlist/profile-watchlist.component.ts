import { Component, OnInit } from '@angular/core';
import { stkRoutingServices } from '../../../services/stkRouting.services';


@Component({
  selector: 'app-profile-watchlist',
  templateUrl: './profile-watchlist.component.html',
  styleUrls: ['./profile-watchlist.component.css']
})
export class ProfileWatchlistComponent implements OnInit {

  constructor(private _routing:stkRoutingServices) { }

  ngOnInit() {
    //this.value = this._routing.getEvery5sec(this.symbol)
  }

  symbol: String = 'msft';
  value: Number = 0;

}
