import { Component, OnInit } from '@angular/core';
import { stkRoutingServices } from '../../../services/stkRouting.services';

@Component({
  selector: 'app-stkStats',
  templateUrl: './stkStats.component.html',
  styleUrls: ['./stkStats.component.css']
})
export class stkStatsComponent implements OnInit {

  constructor(private _routing:stkRoutingServices) { }
  
  stats:Object;
  close:number;
  open:number;

  ngOnInit() {
    this.stats = this._routing.statsEmitter.subscribe(
      res => {
        this.stats = res;
        this.close = res.close.price;
        this.open = res.open.price;
        console.log(this.stats);
        console.log(this.close);
        console.log(this.open);
      }
    )
  }

}
