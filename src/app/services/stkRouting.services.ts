import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IStat } from '../models/IStat';
import { IChart } from '../models/Ichart';
import 'rxjs/add/operator/map'

@Injectable()
export class stkRoutingServices {
    constructor(private _httpClient:HttpClient){}
    
    //Event Emitters
    descriptionEmitter = new EventEmitter<string>();
    statsEmitter = new EventEmitter<IStat>();
    symbolEmitter = new EventEmitter<any>();
    //event to emit equity values from stock component to account component
    equityEmitter = new EventEmitter<number>();
    
    
    //Get methods for the service
    //TODO: Get the symbol's description
    getStkAbout(symbol:string): Observable<string>{
        return this._httpClient.get<string>(`https://api.iextrading.com/1.0/stock/${symbol}/company?filter=description`);
    }

    //TODO: Get the symbol's stock price.
    getPrice(symbol:string): Observable<number>{
        return this._httpClient.get<number>(`https://api.iextrading.com/1.0/stock/${symbol}/price`)
    }

    //TODO: Get the symbol's OHLC data
    getStkStats(symbol:string): Observable<IStat>{
        return this._httpClient.get<IStat>(`https://api.iextrading.com/1.0/stock/${symbol}/ohlc`);
    }

    //TODO: Get the symbol's 1month chart data
    getChart1m(symbol:string):Observable<IChart[]>{
        return this._httpClient.get<IChart[]>(`https://api.iextrading.com/1.0/stock/${symbol}/chart`)
    }

    //TODO: Get the symbol's 3months chart data
    getChart3m(symbol:string):Observable<IChart[]>{
        return this._httpClient.get<IChart[]>(`https://api.iextrading.com/1.0/stock/${symbol}/chart/3m`)
    }

    //TODO: Get the symbol's 1year chart data
    getChart1y(symbol:string):Observable<IChart[]>{
        return this._httpClient.get<IChart[]>(`https://api.iextrading.com/1.0/stock/${symbol}/chart/1y`)
    }

    //TODO: Get the symbol's 5years chart data
    getChart5y(symbol:string):Observable<IChart[]>{
        return this._httpClient.get<IChart[]>(`https://api.iextrading.com/1.0/stock/${symbol}/chart/5y`)
    }
}