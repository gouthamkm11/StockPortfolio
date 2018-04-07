import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  profilePic:string = '';
  firstName:string = 'Goutham Kumar';
  lastName:string = 'Somasundaram';
  gender:string = 'Male';
}
