import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-degree-info',
  templateUrl: './degree-info.component.html',
  styleUrls: ['./degree-info.component.css']
})
export class DegreeInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });

  }

  degreeInfo(form: NgForm) {
    console.log('...degreeInfo...');

  //redirect 
  this.router.navigate(['coursework-info']);

  }

}
