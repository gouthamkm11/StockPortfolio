import { Component, OnInit } from '@angular/core';
//Http client module
import { HttpClient } from '@angular/common/http';
//Service Class
import { stkRoutingServices } from '../../../services/stkRouting.services';
import { userProfileServices } from '../../../services/userProfile.services';



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

  ngOnInit() {
  }
  
  //User entered symbol property
  symbol:string;
  //This method gets triggered by "Search" button click.
  getData(){
    this.routing.symbolEmitter.emit(this.symbol);
    this.routing.getStkAbout(this.symbol).subscribe(res =>{this.routing.descriptionEmitter.emit(res);});
    this.routing.getStkStats(this.symbol).subscribe(res => {this.routing.statsEmitter.emit(res);});
  }


  //Variables for below method
  list;
  //This method gets triggered by "Add to Watchlist" button click
  addToWatchlist(){
    this._userProfileService.getStkWatchlistDetails().subscribe((res)=>{
      this.list = res.stocks.map((inputElement)=>inputElement);
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
      else {alert('Stock exists in the array')};
    });
  }


  //Variables for below method
  accDetails;//Get accound details and extract the buying power store it in value
  value:Object;
  inputShares:string;
  stkSymbol:string;
  stkValue;
  totalCost;
  addToStocksOwned(){
    //Get the users buying power and Check for funds and allow purchase
    
    //This service will get the users buying power

    //Get stock values and comapare with buying power
    this.routing.getPrice(this.stkSymbol).subscribe((value)=>{
      this.stkValue = value;
      this.totalCost = this.stkValue * Number(this.inputShares);
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
  //1.Does the user has enough funds to buy the total stock value?
  // stockvalue to purchase = stock price * no of shares.
  // compare the stockvalue with portfolio value. if portfolio value >= stock value do purchase else reject the request
  //2. User has enough funds to purchase the stock.
  //This has two case
  //1. Does the user already have the stock 2. First time purchase
  //Case1:(Yes) Add the user entered no.of.share values to the symbol with the existing share value.(previous stock value + user entered stock value)
  //Case2:Add the user entered stock and shares value to the table.
}