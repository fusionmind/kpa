import { Component, OnInit } from '@angular/core';
import { BabcService } from '../babc.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { VariableAst } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private registerAcct;
  private hasError;
  private message;
  public registerMessage;
  showLoadingIndicator = false;
  private countrycode = [];
  private selectedmobile;

  private mobilecountrycode;
  private mobilephonenumber;
  private mobileextension;

  constructor(private _profileService: BabcService, private router: Router) { }

  ngOnInit() {
    //get country code
    this._profileService.getCountryCode().subscribe(data => this.countrycode = data);
  }


  mobile(x:string) {

    this.selectedmobile = x;

    console.log('...selectedmobile value from mobile function... ' + this.selectedmobile);

  }

  registerNewUser(form: NgForm) {
    console.log('...enter new form...');

    const value = form.value;
    const username = value.username;
    const password = value.password;
    const password2 = value.password2;
    const email = value.email;
    const salutation = value.salutation;
    const suffix = value.suffix;
    const firstname = value.firstname;
    const middlename = value.middlename;
    const lastname = value.lastname;
    
    const primecountrycode = value.primecountrycode;
    const primephonenumber = value.primephonenumber;
    const primeextension = value.primeextension;
    const primemobile = value.primemobile;

    const secondarycountrycode = value.secondarycountrycode;
    const secondaryphonenumber = value.secondaryphonenumber;
    const secondaryextension = value.secondaryextension;
    const secondarymobile = value.secondarymobile;
    

    console.log('...username: ' + username);
    console.log('...password: ' + password);
    console.log('...password2: ' + password2);
    console.log('...email: ' + email);
    console.log('...salutation: ' + salutation);
    console.log('...suffix: ' + suffix);
    console.log('...firstname: ' + firstname);
    console.log('...middlename: ' + middlename);
    console.log('...lastname: ' + lastname);

    console.log('...primecountrycode: ' + primecountrycode);
    console.log('...primephonenumber: ' + primephonenumber);
    console.log('...primeextension: ' + primeextension);
    console.log('...primemobile: ' + primemobile);
    
    console.log('...secondarycountrycode: ' + secondarycountrycode);
    console.log('...secondaryphonenumber: ' + secondaryphonenumber);
    console.log('...secondaryextension: ' + secondaryextension);
    console.log('...secondarymobile: ' + secondarymobile);
    
    //create mobile number
    console.log('...selectedmobile value from registerNewUser function... ' + this.selectedmobile);

    if (this.selectedmobile == 'pmobile') {
      this.mobilecountrycode = primecountrycode;
      this.mobilephonenumber = primephonenumber;
      this.mobileextension = primeextension;
    } else if (this.selectedmobile == 'smobile') {
      this.mobilecountrycode = secondarycountrycode;
      this.mobilephonenumber = secondaryphonenumber;
      this.mobileextension = secondaryextension;
    } else {
      console.log('...cant create mobile number...');
    }

    console.log('...mobile country code: ' + this.mobilecountrycode);
    console.log('...mobile phone: ' + this.mobilephonenumber);
    console.log('...mobile phone ext: ' + this.mobileextension);

    const registerData = {'firstname':firstname, 'lastname':lastname, 'email':email, 'password':password, 'password2':password2, 'username':username,
    'salutation': salutation, 'suffix': suffix, 'middlename': middlename, 'primecountrycode': primecountrycode,  'primephonenumber': primephonenumber, 'primeextension': primeextension,
    'mobilecountrycode': this.mobilecountrycode, 'mobilephonenumber': this.mobilephonenumber, 'mobileextension': this.mobileextension}; 

  //   const registerData = {'firstname':'victor', 'lastname':'gonzales', 'email':'username006@test.com', 'password':'password', 'password2':'password2', 'username':'username006'}; 

    console.log('...registerdata object...' + JSON.stringify(registerData));

    this._profileService.getRegister(registerData).subscribe
    (
      data => {
        this.registerAcct = data;
        console.log('...return data object... ' + JSON.stringify(this.registerAcct));
        this.hasError = this.registerAcct.hasError;
        console.log('...hasError... ' + this.hasError);

        //redirect if successfully register
        if(this.hasError){
          console.log('...unable to register new user...');
          this.showLoadingIndicator = false;
          //console.log('...hasError object before... ' + this.registerMessage);
          this._profileService.getRegisterMessage(registerData).subscribe
          (
            data => {
              this.registerMessage = data;
              console.log('...return data error object... ' + JSON.stringify(this.registerMessage));
              this.message = this.registerMessage.message;
              console.log('...message... ' + this.message);
            }
          );
          //console.log('...hasError object after... ' + JSON.stringify(this.registerMessage[0]);
        } else {
          console.log('...register new user...');
          this.router.navigate(['register-user']);
        }
      },
      error => {
        console.log('...failed to register user...', error)
      }
    );



  } //end registerNewUser



  // registerUser(event){

  //   console.log('...call registerUser...');

  //   this.showLoadingIndicator = true;

  //   event.preventDefault();

  //   const target = event.target;
  //   const email = target.querySelector('#email').value;
  //   const password = target.querySelector('#password').value;
  //   const password2 = target.querySelector('#password2').value;
  //   const firstname = target.querySelector('#firstname').value;
  //   const lastname = target.querySelector('#lastname').value;
  //   const username = target.querySelector('#username').value;
  //   const salutation = target.querySelector('#salutation').value;
  //   const suffix = target.querySelector('#suffix').value;
  //   const middlename = target.querySelector('#middlename').value;
  //   const phonenumber = target.querySelector('#phonenumber').value;
  //   const extensionphone = target.querySelector('#extensionphone').value;
  //   const altphone = target.querySelector('#altphone').value;
  //   const mobilenumber = target.querySelector('#mobilenumber').value;
  //   const faxnumber = target.querySelector('#faxnumber').value;
    
  //   // console.log('...required fields...' + email, password, password2, firstname, middlename,
  //   // lastname, username, salutation, suffix, phonenumber, extensionphone, altphone, mobilenumber, faxnumber);

  //   // const registerData = {'firstname':firstname, 'lastname':lastname, 'email':email, 'password':password, 'password2':password2, 'username':username,
  //   // 'salutation': salutation, 'suffix': suffix, 'middlename': middlename, 'phonenumber': phonenumber, 'extensionphone': extensionphone, 'altphone':altphone,
  //   // 'mobilenumber': mobilenumber, 'faxnumber':faxnumber}; 

  //   const registerData = {'firstname':'victor', 'lastname':'gonzales', 'email':'username006@test.com', 'password':'password', 'password2':'password2', 'username':'username006'}; 

  //   console.log('...TESTDATA...' + JSON.stringify(registerData));

  //   this._profileService.getRegister(registerData).subscribe
  //   (
  //     data => {
  //       this.registerAcct = data;
  //       console.log('...return data object... ' + JSON.stringify(this.registerAcct));
  //       this.hasError = this.registerAcct.hasError;
  //       console.log('...hasError... ' + this.hasError);

  //       //redirect if successfully register
  //       if(this.hasError){
  //         console.log('...unable to register new user...');
  //         this.showLoadingIndicator = false;
  //         this._profileService.getRegisterMessage(registerData).subscribe(data => this.registerMessage = data);
  //       } else {
  //         console.log('...successfully register new user...');
  //         this.router.navigate(['register-user']);
  //       }
  //     },
  //     error => {
  //       console.log('...failed to register user...', error)
  //     }
  //   );

  // } 
  
  //end registeruser

}
