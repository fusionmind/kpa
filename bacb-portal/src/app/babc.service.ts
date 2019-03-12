import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProfile } from './profile';
import { Observable } from 'rxjs';
import { IRegister } from './register';
import { ICountry } from './country';
import { ICountryCode } from './countrycode';
import { ICustomerid  } from './customerid';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BabcService {

  //****************************************************************** 
  // session AppId get and set
  
  private _customerId;
  private _appId;
  
  getcustomerId() {
    console.log('+++ getcustomerid +++ ' + this._appId);
    return this._appId;
  }

  setcustomerId(value){
    this._appId = value;
    console.log('...set customerId... ' + this._appId);
  } 

  //****************************************************************** 


  private _url: string = "https://checkout.sandbox.netsuite.com/c.4040023/BACB/CustomerPortal/assets/data/profile.json";  
  private _netSuiteLogin = "https://checkout.sandbox.netsuite.com/c.4040023/BACB/CustomerPortal/services/initPortal.ss?param=login";
  private _isLogin = "https://system.sandbox.netsuite.com//app/site/hosting/scriptlet.nl?script=384&deploy=1";
  private _netSuiteLogout = "https://checkout.sandbox.netsuite.com/c.4040023/BACB/CustomerPortal/services/initPortal.ss?param=logout";

  //private _netSuiteLogout = "https://checkout.sandbox.netsuite.com/c.4040023/BACB/CustomerPortal/services/TestLogout.ss";

  private _netSuiteRegister = "https://checkout.sandbox.netsuite.com/c.4040023/BACB/CustomerPortal/services/elevatedGateway.ss?esAx=register";
  private _state = "../assets/data/states.json";
  private _canada = "../assets/data/canada.json";
  private _country = "../assets/data/country.json";
  private _salutation = "../assets/data/salutation.json";
  private _suffix = "../assets/data/suffix.json";
  private _countrycode = "../assets/data/country-code.json";
  private _apptype = "https://checkout.sandbox.netsuite.com/c.4040023/BACB/CustomerPortal/services/Applications.ss?param=Create";
  private _loadPersonalContact = "https://checkout.sandbox.netsuite.com/c.4040023/BACB/CustomerPortal/services/PersonalInfo.ss?param=Read";
  private _updatePersonalContact = "https://checkout.sandbox.netsuite.com/c.4040023/BACB/CustomerPortal/services/PersonalInfo.ss?param=Update";

  //info release
  private _loadInfoRelease = "https://checkout.sandbox.netsuite.com/c.4040023/BACB/CustomerPortal/services/Attestation.ss?param=Read";

  //*************testing loging ***************
  private _testTranslate = "https://checkout.sandbox.netsuite.com/c.4040023/BACB/CustomerPortal/services/elevatedPortal.ss?param=translate";

  constructor(private http: HttpClient, private router: Router) { }

  checkLogin() {

    // const loginData = {'Username':'testuser', 'password':'testpassword'};
    // console.log('...check login object... ' + JSON.stringify(loginData) );
    // console.log('...check login link... ' + this._isLogin,);
    // return this.http.post(this._isLogin, loginData );

    return this.http.get(this._isLogin);

  }

  //login **************

  getProfile(): Observable<IProfile[]> {
    return this.http.get<IProfile[]>(this._url);
  }

  getUser(userdata) {
    console.log('...enter getUser...' + JSON.stringify(userdata) );
    return this.http.post(this._netSuiteLogin, userdata);
  }

  getLogoutUser(){
    console.log('...getLogoutUser...');
    console.log('...logout URL... ' + this._netSuiteLogout);
    return this.http.get(this._netSuiteLogout);
  }

  
/*******  testing personal contact info  *******/


  getTanslation(username: object){
    console.log('...call translation service with Username -> ...' + username);
    console.log('...translation link...' + this._testTranslate); 
    return this.http.post(this._testTranslate, username); 
  }


  getAppType(apptype) {
    console.log('...getAppType link...' + this._apptype);
    console.log('...getAppType object...' + JSON.stringify(apptype));
    return this.http.post(this._apptype, apptype);
  }


  //personal-contact-info **************
 
  //step 1: load 
  getPersonalContactInfo(usertype){
    console.log('...getPersonalLink... ' + this._loadPersonalContact);
    console.log('...userType... ' + JSON.stringify(usertype));
    return this.http.post(this._loadPersonalContact, usertype);
  }

  //step 2: send object
  getUpdatePersonalContactInfo(updateinfo){
    console.log('...updatePersonalConactactInfo object send post... ->' + JSON.stringify(updateinfo));
    return this.http.post(this._updatePersonalContact, updateinfo)
  }

  



/*******  End testing personal contact info  *******/


  //register user **************
  getRegister(registerdata) {
    console.log('...enter getRegister object...' + JSON.stringify(registerdata));
    return this.http.post(this._netSuiteRegister, registerdata);
  }

  getRegisterMessage(data): Observable<IRegister> {
    console.log('...getRegisterMessage...');
    return this.http.post<IRegister>(this._netSuiteRegister, data);
  }

  //form selections helpers **************
  getStates() {
    console.log('...getStates...');
    return this.http.get(this._state);
  }
  
  getCanada() {
    console.log('...getCanada...');
    return this.http.get(this._canada);
  }

  getCountry(): Observable<ICountry[]> {
    console.log('...getCountry...');
    return this.http.get<ICountry[]>(this._country);
  }

  getSalutation() {
    console.log('...getSalutation...');
    return this.http.get(this._salutation);
  }

  getSuffix() {
    console.log('...getSuffix...');
    return this.http.get(this._suffix);
  }

  getCountryCode(): Observable<ICountryCode[]> {
    console.log('...getCountryCode...');
    return this.http.get<ICountryCode[]>(this._countrycode);

  }

} // end BabcService class






