import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { stkRoutingServices } from '../../../../services/stkRouting.services';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stock-mng-watchlist-item',
  templateUrl: './stock-mng-watchlist-item.component.html',
  styleUrls: ['./stock-mng-watchlist-item.component.css']
})
export class StockMngWatchlistItemComponent implements OnInit {

  constructor(private _routing:stkRoutingServices,
              private _http:HttpClient) { }

  @Input() data;
  @Output() stkSymbol = new EventEmitter<any>();

  currentPrice;
  symbol;

  ngOnInit() {
    this.symbol = this.data.stock;
    //   Observable.interval(1000).timeInterval()
    // .flatMap(()=>this._routing.getPrice(this.data.stock))
    // .subscribe((value)=>this.currentPrice=value);
  }

  removeStock(){
    this.stkSymbol = this.symbol;
    this._http.post('http://localhost:3002/api/removeStocks/',{
              googleID:14,
              stock:`${this.symbol}`
            },{responseType:'text'}).subscribe((res)=>res);
  }
}
