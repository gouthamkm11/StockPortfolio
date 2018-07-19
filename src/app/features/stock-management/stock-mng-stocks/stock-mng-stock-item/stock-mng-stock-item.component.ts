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

  @Input() data:{stock:string,shares:number};
  equity:Number = 0;
  inputNumber:number;
  
  constructor(private _routing:stkRoutingServices,
              private _userProfileService:userProfileServices,
              private _http:HttpClient) { }

  
  ngOnInit() {
  }

  stkValue;
  totalCost;
  sellStock(){
    //Is user allowed for sell
    if(this.inputNumber <= this.data.shares)
    {
      this._routing.getPrice(this.data.stock).subscribe((value)=>{
        this.stkValue = value;
        this.totalCost = this.stkValue * this.inputNumber;
        this._http.post('http://localhost:3002/api/sellStocks/',{
              googleID:14,
              stkSymbol:`${this.data.stock}`,
              shares:`${this.inputNumber}`,
              currentShares:`${this.data.shares}`,
              sellCost:`${this.totalCost}`
            },{responseType:'text'}).subscribe((res)=>res);
        });
      }
      else{
        alert(`No shares to sell the stock`)
      }
    }

  buyStkValue;
  buyTotalCost;
  buyAccDetails;
  buyValue
  buyStock(){
    this._routing.getPrice(this.data.stock).subscribe((value)=>{
      this.buyStkValue = value;
      this.buyTotalCost = Number(this.buyStkValue) * Number(this.inputNumber);
      this._userProfileService.getAccountDetails().subscribe(res=>{
        this.buyAccDetails = res;
        this.buyValue = Number(this.buyAccDetails.buyingPower);
        console.log(`asdasdasd${this.buyValue}`);
        if(this.buyValue >= this.buyTotalCost)
        {
          this._http.post('http://localhost:3002/api/buyStocks/',{
            googleID:14,
            stkSymbol:`${this.data.stock}`,
            shares:`${this.inputNumber}`,
            purchaseCost:`${this.buyTotalCost}`
          }, {responseType:'text'}).subscribe((res)=>res);
        }
        else{
          alert(`Not enough funds to purchase`)
        }
      });
    });
  }
}
