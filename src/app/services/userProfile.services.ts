import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userProfile } from '../models/userProfile.model';
import { accountInfo } from '../models/accountInfo.model';
import { stkOwned } from '../models/stkOwned.model';
import { stkWathclist } from '../models/stkWatchlist.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class userProfileServices {
    constructor(private _httpClient:HttpClient){}

    //Initializing the event emitter to use in user-profile component
    profileDetailsEmitter = new EventEmitter<userProfile>();
    accountInformationEmitter = new EventEmitter<accountInfo>();
    stkOwnedEmitter = new EventEmitter<Object>();
    stkWatchlistEmitter = new EventEmitter<Object>();

    //Methods to access the angularEndpoints configured at the backend
    getProfileDetails(){
        return this._httpClient.get('http://localhost:3002/api/userData')
        .map(result=>result);
    }

    getStkOwnedDetails(){
        return this._httpClient.get<String>('http://localhost:3002/api/ownedData')
        .map((result)=>{
            return JSON.stringify(result);
        });
    }

    getStkWatchlistDetails(){
        return this._httpClient.get<string>('http://localhost:3002/api/watchlistData')
        .map((result)=>{
            return JSON.stringify(result);
        });
    }

    getAccountDetails(){
        return this._httpClient.get('http://localhost:3002/api/accountData')
        .map(result => result);
    }
}
