import { Component, OnInit } from '@angular/core';
import { userProfileServices } from '../../../services/userProfile.services';

@Component({
  selector: 'app-stock-mng-stocks',
  templateUrl: './stock-mng-stocks.component.html',
  styleUrls: ['./stock-mng-stocks.component.css']
})
export class StockMngStocksComponent implements OnInit {

  constructor(private routing:userProfileServices) { }
  stks;
  
  ngOnInit() {
    this.routing.getStkOwnedDetails().subscribe((res)=>{
      let ans = JSON.parse(res);
      this.stks = ans.stocks;
      console.log(`stocks${this.stks}`)
    })
  }
}
