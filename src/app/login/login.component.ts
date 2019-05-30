import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailTel: any;
  password: string;
  constructor(private httpCLient: HttpClient) { }

  ngOnInit() {
  }

  login() {
    const  Logins = {
      emailTel: this.emailTel,
      password: this.password
    };
    this.httpCLient.post('http://localhost:3000/login', Logins).subscribe(response => {
      console.log('Post Response:', response);
    });
  }
}
