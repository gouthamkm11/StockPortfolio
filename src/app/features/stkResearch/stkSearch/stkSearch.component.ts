import { Component, OnInit } from '@angular/core';
import { stkRoutingServices } from '../../../services/stkRouting.services';

@Component({
  selector: 'app-stkSearch',
  templateUrl: './stkSearch.component.html',
  styleUrls: ['./stkSearch.component.css'],
})
export class stkSearchComponent implements OnInit {

  constructor(private routing:stkRoutingServices) { }

  symbol:string;

  ngOnInit() {
  }
  
  getInput(event:any){
    this.symbol = event.value;
  }
  
  getData(){
    this.routing.symbolEmitter.emit(this.symbol);
    this.routing.getStkAbout(this.symbol).subscribe(res =>{this.routing.descriptionEmitter.emit(res);});
    this.routing.getStkStats(this.symbol).subscribe(res => {this.routing.statsEmitter.emit(res);});
  }
}
