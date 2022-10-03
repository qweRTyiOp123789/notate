import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/service/authorization/authorization.service';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

	constructor(private as: AuthorizationService) { }

	login:any
	password: any

	authorization(){
		let authUser = {
			login: this.login,
			password: this.password,
		}
		this.as.checkAuthParam(authUser)
	}

	ngOnInit(): void {
	}

}
