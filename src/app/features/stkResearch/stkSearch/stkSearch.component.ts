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
  list;
  watchlistSymbols;

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

  addToWatchlist(){
    this._userProfileService.getStkWatchlistDetails().subscribe((symbol)=>{
      this.list= symbol;
      this.watchlistSymbols = this.list.stocks;
      //checking whether the symbol present in watchlist
      let ans = this.watchlistSymbols.indexOf(this.symbol);
      if(ans === -1){
        this._http.post('http://localhost:3002/api/watchlistData/',{
          googleID:14,
          stocks:`${this.symbol}`
        }).subscribe((res)=>res);
      }
      else {console.log("stock exits")};
    });
  }
}