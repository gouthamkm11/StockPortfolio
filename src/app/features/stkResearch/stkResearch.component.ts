import { Component } from "@angular/core";
import { stkRoutingServices } from "../../services/stkRouting.services";
import { userProfileServices } from "../../services/userProfile.services";

@Component({
    selector: 'app-stkResearch',
    templateUrl: './stkResearch.component.html',
    styleUrls: ['./stkResearch.component.css'],
    providers: [stkRoutingServices,userProfileServices]
})

export class stkResearchComponent{
    
}