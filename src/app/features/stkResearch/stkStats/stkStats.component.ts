import { Component, OnInit } from '@angular/core';
//service class
import { stkRoutingServices } from '../../../services/stkRouting.services';
//importing stats model
import { IStat } from '../../../models/IStat';

@Component({
  selector: 'app-stkStats',
  templateUrl: './stkStats.component.html',
  styleUrls: ['./stkStats.component.css']
})
export class stkStatsComponent implements OnInit {

  constructor(private _routing:stkRoutingServices) { }
  
  //Component properties
  stats:IStat;

  ngOnInit() {
    this.stats = this._routing.statsEmitter.subscribe(res => { this.stats = res;})
  }
}
