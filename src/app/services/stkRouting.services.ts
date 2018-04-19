import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable()
export class stkRoutingServices {
    constructor(private _httpClient:HttpClient){}
    
    descriptionEmitter = new EventEmitter<Object>();
    statsEmitter = new EventEmitter<Object>();
    symbolEmitter = new EventEmitter<string>();
    
    getStkAbout(symbol){
        return this._httpClient.get(`https://api.iextrading.com/1.0/stock/${symbol}/company?filter=description`)
        .map(result => result);
    }

    getStkStats(symbol){
        return this._httpClient.get(`https://api.iextrading.com/1.0/stock/${symbol}/ohlc`)
        .map(result => result);
    }

    getChart1m(symbol){
        return this._httpClient.get(`https://api.iextrading.com/1.0/stock/${symbol}/chart`)
        .map(res => res);
    }

    getChart3m(symbol){
        return this._httpClient.get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/3m`)
        .map(res => res);
    }

    getChart1y(symbol){
        return this._httpClient.get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/1y`)
        .map(res => res);
    }

    getChart5y(symbol){
        return this._httpClient.get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/5y`)
        .map(res => res);
    }

    getPrice(symbol){
        return this._httpClient.get(`https://api.iextrading.com/1.0/stock/${symbol}/price`)
        .map(res => res);
    }
}