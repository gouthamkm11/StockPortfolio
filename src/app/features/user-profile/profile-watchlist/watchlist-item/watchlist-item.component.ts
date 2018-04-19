import { Component, OnInit, Input } from '@angular/core';
import { stkWathclist } from '../../../../models/stkWatchlist.model';
import { stkRoutingServices }  from '../../../../services/stkRouting.services'


@Component({
  selector: 'app-watchlist-item',
  templateUrl: './watchlist-item.component.html',
  styleUrls: ['./watchlist-item.component.css']
})
export class WatchlistItemComponent implements OnInit {

  constructor(private _routing:stkRoutingServices) { }

  @Input() data:stkWathclist;

  currentPrice;

  ngOnInit() {
    this._routing.getPrice(this.data).subscribe((value)=>{
      this.currentPrice = value;
    }) 
  }


  // onClickStock(){

  // }

}
