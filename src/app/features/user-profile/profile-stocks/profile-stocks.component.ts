import { Component, OnInit } from '@angular/core';
import { userProfileServices } from "../../../services/userProfile.services";
import { stkOwned } from '../../../models/stkOwned.model'

@Component({
  selector: 'app-profile-stocks',
  templateUrl: './profile-stocks.component.html',
  styleUrls: ['./profile-stocks.component.css']
})
export class ProfileStocksComponent implements OnInit {

  constructor(private routing:userProfileServices) { }
  stks;
  
  ngOnInit() {
    this.routing.getStkOwnedDetails().subscribe((res)=>{
      let ans = JSON.parse(res);
      this.stks = ans.stocks;
      console.log(`stocks${this.stks}`)
    })
  }
}