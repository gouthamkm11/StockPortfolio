import { Component, OnInit } from '@angular/core';
import { userProfileServices } from '../../services/userProfile.services';
import { userProfile } from '../../models/userProfile.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [userProfileServices]
})
export class UserProfileComponent implements OnInit {

  constructor(private routing:userProfileServices) { }

  userDetails;
  userProfileDetails;

  ngOnInit() {
    this.routing.getProfileDetails().subscribe((res)=>{
      this.userDetails = res;
      console.log(`User profile root component ${this.userDetails.profilePic}`);
      this.userProfileDetails = new userProfile(this.userDetails.username,this.userDetails.profilePic,this.userDetails.gender);
      this.routing.profileDetailsEmitter.emit(this.userProfileDetails);
    });
  }

  //layout Design
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ]



  //Source for all profile values
  
}
