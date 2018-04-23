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
export class WatchlistItemComponent implements OnInit, OnChanges {

  constructor(private _routing:stkRoutingServices) { }

  @Input() data:stkWathclist;

  currentPrice;

  ngOnInit() {
      Observable.interval(1000).timeInterval()
    .flatMap(()=>this._routing.getPrice(this.data))
    .subscribe((value)=>this.currentPrice=value);
    // this._routing.getPrice(this.data).subscribe((value)=>{
    //   this.currentPrice = value;
  }

  ngOnChanges(){
    
  }

  // ngOnChanges(){
  //   Observable.interval(1000).timeInterval()
  //   .flatMap(()=>this._routing.getPrice(this.data))
  //   .subscribe((value)=>this.currentPrice=value);
  // }
}
