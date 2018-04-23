export class stkOwned{
    public stock;
    public share;

    constructor(stock){
        this.stock = stock.stock;
        this.share = stock.shares;
    }
}