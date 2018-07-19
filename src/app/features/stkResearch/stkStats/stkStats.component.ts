import { Component, OnInit } from '@angular/core';
//service class
import { stkRoutingServices } from '../../../services/stkRouting.services';

@Component({
  selector: 'app-stkStats',
  templateUrl: './stkStats.component.html',
  styleUrls: ['./stkStats.component.css']
})
export class stkStatsComponent implements OnInit {

  constructor(private _routing:stkRoutingServices) { }
  
  //Component properties
  stats:object;
  close:number;
  open:number;
  high:number;
  low:number;

  ngOnInit() {
    this.stats = this._routing.statsEmitter.subscribe(
      res => {
        this.stats = res;
        this.close = res.close.price;
        this.open = res.open.price;
        this.high = res.high;
        this.low = res.low;
      }
    )
  }

}
