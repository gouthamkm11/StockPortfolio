import { Component, OnInit } from "@angular/core";
import { stkRoutingServices } from "../../../services/stkRouting.services";

@Component({
    selector:'app-stkAbout',
    templateUrl:'./stkAbout.component.html',
    styleUrls:['./stkAbout.component.css']
})
export class stkAboutComponent implements OnInit{
    constructor(private _routing:stkRoutingServices){}

    description:string = ' ';

    ngOnInit(){
        this.description = this._routing.descriptionEmitter.subscribe(
            res => {
                this.description = res.description;
                console.log(this.description);
             })
    }
}


