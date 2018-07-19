import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../models/IUser';
import { userProfileServices } from '../../../services/userProfile.services';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  constructor(private _userProfileServices:userProfileServices) { }

  profileData:IUser;

  ngOnInit() {
    this._userProfileServices.profileDetailsEmitter.subscribe( res =>{
      this.profileData = res;})
  }
}
