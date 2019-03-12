import { Component, OnInit } from '@angular/core';
import { BabcService } from '../babc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userAcct;
  private hasError; 
  private userFirstName;
  private logginmsg;

  //test tranlation
  private userEmail;
  private userTestEmail;
  private testLogin;
  private userLogin; 

  constructor(private _profileService: BabcService, private router: Router) { }

  ngOnInit() {

    //call a post to check if logged in

    // this._profileService.checkLogin().subscribe
    // (data => { 
    //   this.logginmsg = data; 
    //   console.log('...checkLogin object...' + data);
    //   console.log('...check logged in message inside: ' + this.logginmsg);
    
    //   },
    //   error => {
    //     console.log("...failed check login...", error);
    //   } 
    // );

    // console.log('...check logged in message outside: ' + this.logginmsg);


    


    }

  loginUser(event) {
    console.log('...enter login...');


    event.preventDefault();

    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    console.log('...credentials entered... ' + username, password);

    const loginData = {'Username':username, 'password':password};

    const testUser = {'Username':'username006'};

    //const loginData = {'Username':'username006', 'password':'password'};

  //   const loginData = {
  //     "hasError":null,
  //     "message":null,
  //     "data":
  //         {
  //             "user":
  //             {
  //                 "firstname":null,
  //                 "paymentterms":null,
  //                 "phoneinfo":null,
  //                 "middlename":null,
  //                 "vatregistration":null,
  //                 "creditholdoverride":null,
  //                 "lastname":null,
  //                 "internalid":null,
  //                 "addressbook":null,
  //                 "campaignsubscriptions":null,
  //                 "stage":null,
  //                 "isperson":null,
  //                 "balance":null,
  //                 "creditcards":null,
  //                 "companyname":null,
  //                 "name":null,
  //                 "emailsubscribe":null,
  //                 "creditlimit":null,
  //                 "email":null,
  //                 "custentity_es_has_user_activated":null,
  //                 "custentity_es_resend_activation_email":null,
  //                 "custentity_es_hash_value":null,
  //                 "custentity_es_accept_bacb_terms":null,
  //                 "custentity_bacb_id":null,
  //                 "custentity_username":null
  //             }
  //         }
  // }
   

//step 1 send translate 
this._profileService.getTanslation(testUser).subscribe
(
  data => {
    this.userEmail = data;
    console.log('... step 1a: tranlation object return...' + JSON.stringify(this.userEmail));
    this.userTestEmail = this.userEmail.email;
    console.log('...step 1b: email... ' + this.userTestEmail);

    this.testLogin = {'email': this.userTestEmail, 'password': 'password'};
    console.log('...step 1c: testLogin object ..' + JSON.stringify(this.testLogin));

    this._profileService.getUser(this.testLogin).subscribe
    (
      data => {
        this.userLogin = data;
        console.log('...step 2: login object return... <--> ' +  JSON.stringify( this.userLogin ));
        this.router.navigate(['account-portal']);
      }
    );

  }

);


//step 2 send login

// this._profileService.getUser(this.testLogin).subscribe
// (
//   data => {
//     this.userLogin = data;
//     console.log('...step 2: login call returned... ' +  JSON.stringify(this.userLogin));
//   }
// );



  

   // console.log('...soft coded var loginData::: ' + JSON.stringify(loginData));

  //   this._profileService.getUser(loginData).subscribe
  //   (data => {
  //     this.userAcct = data;
  //     console.log('...returned data object... ' + JSON.stringify(this.userAcct));
  //     this.hasError = this.userAcct.hasError;
  //     console.log('...hasError... ' + this.hasError);

  //     // redirect if successfully login
  //     if( this.hasError ){
  //       console.log('...user un-successful login...');
  //     } else {
  //       console.log('...user successful login...');
  //       this.router.navigate(['account-portal']);
  //     }
  //   },
  //   error => {
  //     console.log("...failed to login user...", error);
  //   }
  // ); // end profileService

  } //end loginUser

} //end LoginComponent
