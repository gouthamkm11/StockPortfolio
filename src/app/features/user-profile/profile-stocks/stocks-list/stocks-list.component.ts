import { Component, OnInit, Input } from '@angular/core';
import { IStocksowned } from '../../../../models/IStocksowned';
import { stkRoutingServices } from '../../../../services/stkRouting.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.css']
})
export class StocksListComponent implements OnInit {
  
  //Component Property
  @Input() data:{stock:string,shares:number};
  equity:Number;
  value:number;

  constructor(private _routing:stkRoutingServices) { }
  
  ngOnInit() {
    Observable.interval(1000).timeInterval().flatMap(()=>this._routing.getPrice(this.data.stock))
    .subscribe((value)=>{
      this.value = value;
      this.equity = this.value * this.data.shares;
    });
  }
}
