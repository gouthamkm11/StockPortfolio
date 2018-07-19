// export class stkWathclist{
//     public stkSymbol:{stock:String}[];

//     constructor(stkwatchlist){
//         this.stkSymbol = stkwatchlist;
//     }
// }

export interface IWatchlist {
    stocks:Array<{stock:string}>[],
    googleID: string
}