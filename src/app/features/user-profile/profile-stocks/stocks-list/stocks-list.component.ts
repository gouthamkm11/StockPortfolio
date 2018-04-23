import { Component, OnInit, Input } from '@angular/core';
import { stkOwned } from '../../../../models/stkOwned.model';
import { stkRoutingServices } from '../../../../services/stkRouting.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.css']
})
export class StocksListComponent implements OnInit {
  
  @Input() data;
  stock;
  equity;
  value;
  shares;
  constructor(private _routing:stkRoutingServices) { }
  ngOnInit() {
    this.stock = this.data.stock;
    this.shares = this.data.shares;
    Observable.interval(1000).timeInterval().flatMap(()=>this._routing.getPrice(this.stock))
    .subscribe((value)=>{
      this.value = value;
      this.equity = this.value * this.shares;
    });
  }
}
