import { Component, OnInit } from '@angular/core';
import { MainService } from "./../main.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user = {
    first_name:"",
    last_name:"",
    email:"",
    location:""
  }

  constructor(private _service: MainService, private _router: Router) { }

  ngOnInit() {
    if (this._service.user === null) {
      this._router.navigate(['']);
    }
  }

  updateInfo() {
    this._service.updateInfo(this.user) {
      this._router.navigate(['create']);
    }
    this.user = {
      first_name:"",
      last_name:"",
      email:"",
      location:""
    }
  }

  logout(){
    this._service.logout();
    this._router.navigate(['']);
  }

}
