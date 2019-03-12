import { Component, OnInit } from '@angular/core';
import { BabcService } from '../babc.service';


@Component({
  selector: 'app-account-portal',
  templateUrl: './account-portal.component.html',
  styleUrls: ['./account-portal.component.css']
})
export class AccountPortalComponent implements OnInit {

  public profiles = [];
  
  constructor(private _profileService: BabcService) { }

  ngOnInit() {

    //service hook
    this._profileService.getProfile().subscribe(data => this.profiles = data);

  }


}
