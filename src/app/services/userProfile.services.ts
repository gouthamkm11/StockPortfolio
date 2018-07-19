import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../models/IUser';
import { IAccountdetails } from '../models/IAccountdetails';
import { IStocksowned } from '../models/IStocksowned';
import { IWatchlist } from '../models/IWatchlist';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class userProfileServices {
    constructor(private _httpClient:HttpClient){}

    //Event Emitters
    profileDetailsEmitter = new EventEmitter<IUser>();
    accountInformationEmitter = new EventEmitter<IAccountdetails>();
    stkOwnedEmitter = new EventEmitter<IStocksowned>();
    stkWatchlistEmitter = new EventEmitter<IWatchlist>();

    //Get methods for the service
    //TODO: Get the logged in users profile data.
    getProfileDetails(): Observable<IUser>{
        return this._httpClient.get<IUser>('http://localhost:3002/api/userData');
    }

    //TODO: Get the user owned stock data
    getStkOwnedDetails(): Observable<IStocksowned>{
        return this._httpClient.get<IStocksowned>('http://localhost:3002/api/ownedData');
    }

    //TODO: Get the user owned watchlist data
    getStkWatchlistDetails(): Observable<IWatchlist>{
        return this._httpClient.get<IWatchlist>('http://localhost:3002/api/watchlistData');
    }

    //TODO: Get the user's account data
    getAccountDetails(){
        return this._httpClient.get<IAccountdetails>('http://localhost:3002/api/accountData');
    }
}
