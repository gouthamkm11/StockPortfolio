import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { stkRoutingServices } from '../../../../services/stkRouting.services';

@Component({
  selector: 'app-stock-mng-stock-item',
  templateUrl: './stock-mng-stock-item.component.html',
  styleUrls: ['./stock-mng-stock-item.component.css']
})
export class StockMngStockItemComponent implements OnInit {

  @Input() data;
  stock;
  equity:Number = 0;
  value;
  shares;
  number;
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
