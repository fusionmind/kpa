import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-coursework-info',
  templateUrl: './coursework-info.component.html',
  styleUrls: ['./coursework-info.component.css']
})
export class CourseworkInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
    
  }


  courseWorkInfo(form: NgForm) {
    console.log('...degreeInfo...');

  //redirect 
  this.router.navigate(['experience-info']);

  }




}
