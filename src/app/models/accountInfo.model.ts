export class accountInfo{
    public portfolioValue:Number;
    public buyingPower:Number;

    constructor(account){
        this.portfolioValue = account.portfolioValue;
        this.buyingPower = account.buyingPower;
    }
}