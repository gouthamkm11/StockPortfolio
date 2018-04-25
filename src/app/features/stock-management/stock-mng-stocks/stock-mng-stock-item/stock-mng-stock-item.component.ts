import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { stkRoutingServices } from '../../../../services/stkRouting.services';
import { userProfileServices } from '../../../../services/userProfile.services';
import { HttpClient } from '@angular/common/http';

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
  constructor(private _routing:stkRoutingServices,
              private _userProfileService:userProfileServices,
              private _http:HttpClient) { }
  ngOnInit() {
    this.stock = this.data.stock;
    this.shares = this.data.shares;
    // Observable.interval(1000).timeInterval().flatMap(()=>this._routing.getPrice(this.stock))
    // .subscribe((value)=>{
    //   this.value = value;
    //   this.equity = this.value * this.shares;
    // });
  }

  stkValue;
  totalCost;
  sellStock(){
    //Is user allowed for sell
    if(this.number <= this.data.shares)
    {
      this._routing.getPrice(this.stock).subscribe((value)=>{
        this.stkValue = value;
        this.totalCost = this.stkValue * this.number;
        this._http.post('http://localhost:3002/api/sellStocks/',{
              googleID:14,
              stkSymbol:`${this.stock}`,
              shares:`${this.number}`,
              currentShares:`${this.data.shares}`,
              sellCost:`${this.totalCost}`
            },{responseType:'text'}).subscribe((res)=>res);
        });
      }
      else{
        console.log("No sell");
      }
    }

  buyStock(){
  //   this.routing.getPrice(this.stkSymbol).subscribe((value)=>{
  //     this.stkValue = value;
  //     this.totalCost = this.stkValue * this.inputShares;
  //     this._userProfileService.getAccountDetails().subscribe(res=>{
  //       this.accDetails = res;
  //       this.value = this.accDetails.buyingPower
  //       if(this.value >= this.totalCost)
  //       {
  //         this._http.post('http://localhost:3002/api/buyStocks/',{
  //           googleID:14,
  //           stkSymbol:`${this.stkSymbol}`,
  //           shares:`${this.inputShares}`,
  //           purchaseCost:`${this.totalCost}`
  //         }, {responseType:'text'}).subscribe((res)=>res);
  //       }
  //       else{
  //         console.log("No purchase");
  //       }
  //     });
  //   });
  // }
  }

}
