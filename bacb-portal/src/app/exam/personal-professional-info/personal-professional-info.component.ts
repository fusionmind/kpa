import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-personal-professional-info',
  templateUrl: './personal-professional-info.component.html',
  styleUrls: ['./personal-professional-info.component.css']
})
export class PersonalProfessionalInfoComponent implements OnInit {

  private selectedValue; 

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
  }

  proInfo(form: NgForm) {
    console.log('...proInfo...');

    const value = form.value;

    //this.selectedValue = undefined;

  //redirect 
  //this.router.navigate(['non-professional-credentials']);

  }


  unselect():void {
   this.selectedValue = undefined;

    console.log('...clear age values...');

  }



}
