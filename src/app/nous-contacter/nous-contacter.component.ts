import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nous-contacter',
  templateUrl: './nous-contacter.component.html',
  styleUrls: ['./nous-contacter.component.css']
})
export class NousContacterComponent implements OnInit {
  nom: string;
  prenom: string;
  sujet: string;
  message: any;

  constructor() { }

  ngOnInit() {
  }
  contacter() {

  }
}
