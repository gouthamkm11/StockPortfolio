import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../models/IUser';
import { accountInfo } from '../models/accountInfo.model';
import { stkOwned } from '../models/stkOwned.model';
import { IWatchlist } from '../models/IWatchlist';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class userProfileServices {
    constructor(private _httpClient:HttpClient){}

    //Initializing the event emitter to use in user-profile component
    profileDetailsEmitter = new EventEmitter<IUser>();
    accountInformationEmitter = new EventEmitter<accountInfo>();
    stkOwnedEmitter = new EventEmitter<Object>();
    stkWatchlistEmitter = new EventEmitter<IWatchlist>();

    //Methods to access the angularEndpoints configured at the backend
    getProfileDetails(){
        return this._httpClient.get<IUser>('http://localhost:3002/api/userData');
    }

    getStkOwnedDetails(){
        return this._httpClient.get<String>('http://localhost:3002/api/ownedData')
        .map((result)=>{
            return JSON.stringify(result);
        });
    }

    getStkWatchlistDetails(){
        return this._httpClient.get<IWatchlist>('http://localhost:3002/api/watchlistData');
        // .map((result)=>{
        //     return JSON.stringify(result);
        // });
    }

    getAccountDetails(){
        return this._httpClient.get('http://localhost:3002/api/accountData')
        .map(result => result);
    }
}
