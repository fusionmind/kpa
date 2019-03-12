import { Component, OnInit } from '@angular/core';
import { BabcService } from '../babc.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    private logoutacct;
    private hasError;

    constructor(private _profileService: BabcService, private router: Router) { }

    ngOnInit() {
    }

    logoutClicked() {
        console.log('...logOut...');

        this._profileService.getLogoutUser().subscribe
        (
            data => {
                this.logoutacct = data;
                console.log('...returned logout object...' + JSON.stringify(this.logoutacct));
                this.hasError = this.logoutacct.hasError;
                console.log('...logout hasError...' + this.hasError);

                //redirect successful lout
                if (this.hasError) {
                    console.log('...user not logged out...');
                } else {
                    console.log('...user logged out...');
                    this.router.navigate(['login']);
                }
            },
            error => {
                console.log("...failed to logout user...", error);
            }
        );
    }


}