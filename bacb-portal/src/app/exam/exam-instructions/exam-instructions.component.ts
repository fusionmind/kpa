import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';

import { BabcService } from '../../babc.service';

@Component({
  selector: 'app-exam-instructions',
  templateUrl: './exam-instructions.component.html',
  styleUrls: ['./exam-instructions.component.css']
})
export class ExamInstructionsComponent implements OnInit {

  private regType;
  private hasError;
  private dataobject;

  constructor(private _profileService: BabcService, private router: Router) { }

  ngOnInit() {

    //load top of page
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });

  }


  instructionChoice(form: NgForm) {

    //redirect 
    //this.router.navigate(['personal-contact-info']);

    const value = form.value;
    const apptype = value.apptype;

    console.log('... applicationtype value: ' + apptype);

    // hard coded AppType and CustomerID
    const instrChoice = {'AppType': '6'};
    console.log('...option object sending... ------->' + JSON.stringify(instrChoice) );

    //redirect 
    //this.router.navigate(['personal-contact-info']);

    //const testData = {'AppType': 'testuser' };
    //console.log('...testdata sent::: ' +  JSON.stringify(testData));

    this._profileService.getAppType(instrChoice).subscribe
    (
      data => {
        this.regType = data;
        console.log('...getAppType post return... ' + JSON.stringify(this.regType) );
        this.hasError = this.regType.hasError;
        console.log('...hasError... ' + this.hasError);
        this.dataobject = this.regType.data;
        console.log('...data object... ' + JSON.stringify(this.dataobject));

        //redirect if successfully appType object is returned 
        if (this.hasError || null){
          console.log('...hasError is true...'); 
        } else {
          console.log('...hasError is false...');
          this.router.navigate(['personal-contact-info']); 
        }
      },
      error => {
        console.log('...failed to get AppType... ' + JSON.stringify(this.regType) );
      }
    );

  } //end instructionChoice  

} //end OnInit class


