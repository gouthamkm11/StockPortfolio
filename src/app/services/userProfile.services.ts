import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userProfile } from '../models/userProfile.model';
import { accountInfo } from '../models/accountInfo.model';
import { stkOwned } from '../models/stkOwned.model';
import { stkWathclist } from '../models/stkWatchlist.model';
import 'rxjs/add/operator/map'

@Injectable()
export class userProfileServices {
    constructor(private _httpClient:HttpClient){}

    //Initializing the event emitter to use in user-profile component
    profileDetailsEmitter = new EventEmitter<userProfile>();
    accountInformationEmitter = new EventEmitter<accountInfo>();
    stkOwnedEmitter = new EventEmitter<stkOwned>();
    stkWatchlistEmitter = new EventEmitter<stkWathclist>();

    //Methods to access the angularEndpoints configured at the backend
    getProfileDetails(){
        return this._httpClient.get('http://localhost:3002/api/userData').map(result => result);
    }

    getStkOwnedDetails(){
        return this._httpClient.get('http://localhost:3002/api/ownedData').map(result => result);
    }

    getStkWatchlistDetails(){
        return this._httpClient.get('http://localhost:3002/api/watchlistData').map(result => result);
    }

    getAccountDetails(){
        return this._httpClient.get('http://localhost:3002/api/accountData').map(result => result);
    }
}