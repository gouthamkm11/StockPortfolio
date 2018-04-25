import { Component, OnInit, Input } from '@angular/core';
import { stkRoutingServices } from '../../../../services/stkRouting.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stock-mng-watchlist-item',
  templateUrl: './stock-mng-watchlist-item.component.html',
  styleUrls: ['./stock-mng-watchlist-item.component.css']
})
export class StockMngWatchlistItemComponent implements OnInit {

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
