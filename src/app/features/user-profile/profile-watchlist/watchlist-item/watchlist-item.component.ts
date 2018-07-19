import { Component, OnInit, Input } from '@angular/core';

//Importing service
import { stkRoutingServices }  from '../../../../services/stkRouting.services'

//Importing observable for implementing timed triggers to service call
import { Observable } from 'rxjs';


@Component({
  selector: 'app-watchlist-item',
  templateUrl: './watchlist-item.component.html',
  styleUrls: ['./watchlist-item.component.css']
})
export class WatchlistItemComponent implements OnInit {

  constructor(private _routing:stkRoutingServices) { }

  //Component property
  @Input() data:{stock:string};
  currentPrice:number;
  symbol:string;


  //Component Initialization Method
  ngOnInit() {
    this.symbol = this.data.stock;
    Observable.interval(1000).timeInterval()
    .flatMap(()=>this._routing.getPrice(this.data.stock))
    .subscribe((value)=>this.currentPrice=value);
  }

}
