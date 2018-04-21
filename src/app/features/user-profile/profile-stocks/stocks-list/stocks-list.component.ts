import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.css']
})
export class StocksListComponent implements OnInit {

  @Input() data;
  stocks;
  equity;
  value;
  shares;
  constructor() { }
  ngOnInit() {
    
  }

}
