import { Component, OnInit, Input } from '@angular/core';
import { stkOwned } from '../../../../models/stkOwned.model'

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
  constructor() { }
  ngOnInit() {
    this.stock = this.data.stock;
    this.shares = this.data.shares;
    
  }
}
