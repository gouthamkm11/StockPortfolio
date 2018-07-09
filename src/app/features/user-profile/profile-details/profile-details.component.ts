import { Component, OnInit } from '@angular/core';
import { userProfileServices } from '../../../services/userProfile.services';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  constructor(private _userProfileServices:userProfileServices) { }

  gender:String;
  profilePic:String;
  firstName:String;
  lastName:String;
  data;
  ngOnInit() {
    this._userProfileServices.profileDetailsEmitter.subscribe( res =>{
      this.firstName = res.userName;
      this.lastName = res.userName;
      this.gender = res.gender;
      this.profilePic = res.profilePic;
      console.log(`Name${this.firstName}Gender${this.gender}profilepic${this.profilePic}`)
    })
  }
}
