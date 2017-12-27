import { Component, OnInit } from '@angular/core';
import { MainService } from "./../main.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  user = {
    first_name:"",
    last_name:"",
    email:""
  }

  events=[];

  constructor(private _service: MainService, private _router: Router) { }

  ngOnInit() {
    this.user = this._service.user;
    if (this._service.user === null) {
      this._router.navigate(['']);
    }
  }
  logout() {
    this._service.logout();
    this._router.navigate(['']);
  }
}
