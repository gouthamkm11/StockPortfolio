import { Component, OnInit } from '@angular/core';
import { userProfileServices } from "../../../services/userProfile.services";

@Component({
  selector: 'app-profile-stocks',
  templateUrl: './profile-stocks.component.html',
  styleUrls: ['./profile-stocks.component.css']
})
export class ProfileStocksComponent implements OnInit {

  constructor(private routing:userProfileServices) { }

  ngOnInit() {
    this.routing.getStkOwnedDetails().subscribe((res)=>{
      
    })
  }
  
}
