import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { stkWathclist } from '../../../../models/stkWatchlist.model';
import { stkRoutingServices }  from '../../../../services/stkRouting.services'
import { Observable } from 'rxjs';
import { Http } from "@angular/http";


@Component({
  selector: 'app-watchlist-item',
  templateUrl: './watchlist-item.component.html',
  styleUrls: ['./watchlist-item.component.css']
})
export class WatchlistItemComponent implements OnInit {

  constructor(private _routing:stkRoutingServices) { }

  @Input() data;

  currentPrice;
  symbol;

  ngOnInit() {
    this.symbol = this.data.stock;
      Observable.interval(1000).timeInterval()
    .flatMap(()=>this._routing.getPrice(this.data.stock))
    .subscribe((value)=>this.currentPrice=value);
  }

}
