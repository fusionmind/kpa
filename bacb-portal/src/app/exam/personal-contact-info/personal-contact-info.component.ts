import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BabcService } from '../../babc.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-personal-contact-info',
  templateUrl: './personal-contact-info.component.html',
  styleUrls: ['./personal-contact-info.component.css']
})
export class PersonalContactInfoComponent implements OnInit {

  private states;
  private canada;
  private country = [];
  private salutation;
  private suffix;
  private countrycode = [];
  private selectedmobile;
  private userinfo; 
  private fullname;
  private useremail;
  private useremailsecondary;
  private selectedmobilenumber;
  private returnedupdate;
  private haserror;
  private CustomerId; 
  private appid;

  constructor(private _service: BabcService, private router: Router) { }

  ngOnInit() {

    //load top of page
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });

    //get states
    this._service.getStates().subscribe(data => this.states = data);

    //get canada
    this._service.getCanada().subscribe(data => this.canada = data);

    //get country
    this._service.getCountry().subscribe(data => this.country = data);

    //get salutation
    this._service.getSalutation().subscribe(data => this.salutation = data);

    //get suffix
    this._service.getSuffix().subscribe(data => this.suffix = data);

    //get country code
    this._service.getCountryCode().subscribe(data => this.countrycode = data);

    //preload user info
    const tempuser = { "CustomerId":"61172", "AppId":"337" }

    this._service.getPersonalContactInfo(tempuser).subscribe
    (
      data => {
        this.userinfo = data;
        this.fullname = this.userinfo.data.applicationData.fullName;
        this.useremail = this.userinfo.data.applicationData.email;
        this.useremailsecondary = this.userinfo.data.applicationData.altEmail;
        console.log('...firstName... ' + this.fullname );
        console.log('...firstName... ' + this.useremail );
        console.log('...firstName... ' + this.useremailsecondary );

        console.log('...getAppType post return... ' + JSON.stringify(this.userinfo) );
      },
      error => {
        console.log('...failed to get userinfo... ' + JSON.stringify(this.userinfo) );
      }
    );

  }//end ngOnInit

  sameAddress() {
    console.log('...sameAddress...');

  }

  pMobile(x: string) {
    console.log('...primary mobile...');
    this.selectedmobile = x;
    console.log('...selectedmobile from pMobile: ' + this.selectedmobile);

  }

  secondaryMobile(x: string) {
    console.log('...sMobile...');
    this.selectedmobile = x;
    console.log('...selectedmobile from sMobile: ' + this.selectedmobile);
  }

  //submit form continue
  addPersonalContact(form: NgForm){

    const value = form.value;
    const countrycode = value.countrycode;
    const phone = value.phone;
    const countrycode2 = value.countrycode2; 
    const phone2 = value.phone2;
    const address1 = value.address;
    const address2 = value.address2;
    const city = value.city;
    const state = value.state;
    const postalCode = value.zip;
    const CountryCode = value.country;
    const mailingaddresschecked = value.mailingaddresschecked;
    const mailingaddress1 = value.mailingaddress;
    const mailingaddress2 = value.mailingaddress2;
    const mailingcity = value.mailingcity;
    const mailingstate = value.mailingstate;
    const mailingzip = value.mailingzip;
    const mailingcountry = value.mailingcountry;
    const primaryExt = value.ext;
    const secondaryExt = value.ext2;
    const altemail = value.secondaryemail;

    //mobile phone selection
    if(this.selectedmobile == "primarymobile"){
      console.log('...change mobile to primary');
      this.selectedmobilenumber = value.phone;
    } else if (this.selectedmobile == "secondarymobile") {
      console.log('...change mobile to secondary');
      this.selectedmobilenumber = value.phone2;
    }
    console.log('...selected mobile number to submit.. ' + this.selectedmobilenumber)

    //update post object
    const personalinfo = {
      "CustomerId": "61172",
       "AppId": "337",
       "Phone": phone,
       "AltPhone": phone2,
       "MobilePhone": this.selectedmobilenumber,
       "Address": [{
         "address1": address1,
         "address2": address2,
         "city": city,
         "state": state,
         "CountryCode":CountryCode,
         "postalCode": postalCode
        }],
        "Address2": [{
          "address1": mailingaddress2,
          "address2": mailingaddress2,
          "city": mailingcity,
          "state": mailingstate,
          "CountryCode":mailingcountry,
          "postalCode": mailingzip
         }],
         "BillingIsSame": mailingaddresschecked,
         "primaryCountryCode": countrycode,
         "primaryExt": primaryExt,
         "secondaryCountryCode": countrycode2,
         "secondaryExt": secondaryExt,
         "AltEmail": altemail
    }

    console.log('...update post object...' + JSON.stringify(personalinfo));

    // call service with update post object
    this._service.getUpdatePersonalContactInfo(personalinfo).subscribe
    (
      data => {
        //load full return object
        this.returnedupdate = data;
        console.log('...getUpdatePersonalContactInfo object return post ... ' + JSON.stringify(this.returnedupdate ) );

        //set up post call for hasError, ustomerId and AppId vars
        this.haserror = this.returnedupdate.hasError;
        this.CustomerId = this.returnedupdate.data.CustomerId;
        this.appid = this.returnedupdate.data.AppId;
        console.log('...hasError... ' + this.haserror);
        console.log('...CustomerId...' + this.CustomerId);
        console.log('...AppId... ' + this.appid);

        // set AppId service var
        this._service.setcustomerId(this.appid);

        //const userinfoObj = {'CustomerId': this.CustomerId, 'AppId': this.appid }

        //check for hasError
        if(this.haserror || this.returnedupdate == 'null' ){
          console.log('<><><> hasError true <><><>');
        } else {
          console.log('...no error on submit -> continure to info-release...');
          this.router.navigate(['info-release']);
        }

      },
      error => {
        console.log('...failed to update personal contact info... ' + JSON.stringify(this.returnedupdate) );
      }
    );


  //hard redirect
  //this.router.navigate(['personal-contact-info']);

  }//end addPersonalContact

}// end PersonalContactInfoComponent class
