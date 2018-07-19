import { Component, OnInit } from '@angular/core';
import { userProfileServices } from '../../../services/userProfile.services';
import { IStocksowned } from '../../../models/IStocksowned'

@Component({
  selector: 'app-stock-mng-stocks',
  templateUrl: './stock-mng-stocks.component.html',
  styleUrls: ['./stock-mng-stocks.component.css']
})
export class StockMngStocksComponent implements OnInit {

  constructor(private routing:userProfileServices) { }
  stks:Array<{stock:string,shares:number}>[]=[];
  
  ngOnInit() {
    this.routing.getStkOwnedDetails().subscribe( res=> this.stks = res.stocks )} 
}
