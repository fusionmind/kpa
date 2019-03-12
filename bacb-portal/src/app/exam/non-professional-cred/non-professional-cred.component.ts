import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-non-professional-cred',
  templateUrl: './non-professional-cred.component.html',
  styleUrls: ['./non-professional-cred.component.css']
})
export class NonProfessionalCredComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
  }

  nonProInfo(form: NgForm) {
    console.log('...nonProInfo...');

  //redirect 
  //this.router.navigate(['degree-info']);

  }

}
