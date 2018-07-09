import { Component, OnInit } from '@angular/core';
import { stkRoutingServices } from '../../../services/stkRouting.services';
import { userProfileServices } from '../../../services/userProfile.services';
import { stkWathclist } from '../../../models/stkWatchlist.model';
import { Symbol } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-stkSearch',
  templateUrl: './stkSearch.component.html',
  styleUrls: ['./stkSearch.component.css']
})
export class stkSearchComponent implements OnInit {

  constructor(private routing:stkRoutingServices,
    private _userProfileService:userProfileServices,
    private _http:HttpClient
  ) { }

  symbol:string;
  //To access watchlist stock symbols
  list;
  watchlistSymbols;
  //

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

  initialList;
  addToWatchlist(){
    this._userProfileService.getStkWatchlistDetails().subscribe((symbol)=>{
      let res = JSON.parse(symbol);
      this.list = res.stocks;
      // this.watchlistSymbols = this.list.stocks;
      let stkArray=[];
      this.list.forEach(function(arrayItem){
        stkArray.push(arrayItem.stock);
      })
      //checking whether the symbol present in list
      let ans = stkArray.indexOf(this.symbol);
      if(ans === -1){
        this._http.post('http://localhost:3002/api/watchlistData/',{
          googleID:14,
          stocks:`${this.symbol}`
        }).subscribe((res)=>res);
      }
      else {console.log("stock exits")};
    });
  }


  //input the stock symbol
  //input the no of shares
  ownedStkList;
  stockList=[];//This has all the stocks the user owned.
  accDetails;//Get accound details and extract the buying power store it in value
  value:Object;
  inputShares:any="";
  stkSymbol="";
  stkValue;
  totalCost;
  addToStocksOwned(){
    //Get the users buying power and Check for funds and allow purchase
    
    //This service will get the users buying power

    //Get stock values and comapare with buying power
    this.routing.getPrice(this.stkSymbol).subscribe((value)=>{
      this.stkValue = value;
      this.totalCost = this.stkValue * this.inputShares;
      this._userProfileService.getAccountDetails().subscribe(res=>{
        this.accDetails = res;
        this.value = this.accDetails.buyingPower
        if(this.value >= this.totalCost)
        {
          this._http.post('http://localhost:3002/api/buyStocks/',{
            googleID:14,
            stkSymbol:`${this.stkSymbol}`,
            shares:`${this.inputShares}`,
            purchaseCost:`${this.totalCost}`
          }, {responseType:'text'}).subscribe((res)=>res);
        }
        else{
          console.log("No purchase");
        }
      });
    });
  }
          // this._userProfileService.getStkOwnedDetails().subscribe((stocks)=>{
          //   this.ownedStkList = (JSON.parse(stocks)).stocks;
          //   console.log(`user owned stocks${this.ownedStkList}`);
          //   for (let stocks of this.ownedStkList)
          //   {
          //     this.stockList.push(stocks.stock);
          //   }
    //     for (let stocks of this.stockList)
    //     {
    //       if(stocks == this.stkSymbol)
    //       {
    //         //update the shares in db
           
    //       }
    //       else
    //       {
    //         //create an entry in db
    //         console.log("hello");
    //       }
    //     }
    //   });
    // }
    // else{
    //   console.log("No purchase");
    // }
    //   });

    //Condition to check whether to purchase or not
    
   

    //1.Does the user has enough funds to buy the total stock value?
    // stockvalue to purchase = stock price * no of shares.
    // compare the stockvalue with portfolio value. if portfolio value >= stock value do purchase else reject the request
    //2. User has enough funds to purchase the stock.
    //This has two case
    //1. Does the user already have the stock 2. First time purchase
    //Case1:(Yes) Add the user entered no.of.share values to the symbol with the existing share value.(previous stock value + user entered stock value)
    //Case2:Add the user entered stock and shares value to the table.
}