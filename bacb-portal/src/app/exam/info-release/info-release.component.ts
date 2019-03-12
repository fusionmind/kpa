import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BabcService } from '../../babc.service';

@Component({
  selector: 'app-info-release',
  templateUrl: './info-release.component.html',
  styleUrls: ['./info-release.component.css']
})
export class InfoReleaseComponent implements OnInit {

  private customerId;
  private appId;

  constructor(private router: Router, private _service: BabcService,) { }

  ngOnInit() {

  this.appId = this._service.getcustomerId();
  
  console.log('... --- info-release service AppId --- ' + this.appId);

   //this._service.getcustomerId();


    console.log('...service session customerId... ');

  //this._service.getInfoRelease();


  }

  infoRelease(form: NgForm) {
    console.log('...infoRelease...');

    const value = form.value;
    const inforelease = value.inforelease;

    console.log('...form values:...' + inforelease);

    //redirect 
  this.router.navigate(['personal-professional-info']);

  }

}
