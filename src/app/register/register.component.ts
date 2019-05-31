import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  prenom: string;
  nom: string;
  emailTel: any;
  password: any;

  constructor() { }

  ngOnInit() {
  }
  register() {

  }

}
