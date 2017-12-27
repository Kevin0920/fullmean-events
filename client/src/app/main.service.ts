import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { error } from 'selenium-webdriver';

@Injectable()
export class MainService {

  user;
  constructor(private _http: Http) {
    if (localStorage.user !== undefined) {
      console.log(this.user);
      this.user = JSON.parse(localStorage.user);
    }
   }



  // register user
  register(data, callback) {
    this._http.post("/register", data).subscribe(
      (res) => {
        console.log("from service register: ", res.json());
        callback(res.json());
        if (res.json().success = "success") {
          this.user = res.json().user;
          localStorage.user = JSON.stringify(res.json().user);
        }
      },
      (err) => {
        console.log(err);
      })
  }

  login(data, callback) {
    this._http.post("/login", data).subscribe(
      (res) => {
        callback(res.json());
        console.log(res.json());
        this.user = res.json().user;
        console.log(this.user);
        localStorage.user = JSON.stringify(res.json().user);
      },
      (err) => {
        console.log("error from login service: ", err);
      })
  }
  // Edit function
  updateInfo(data) {
    this._http.put('/user/edit/' + this.user._id, data).subscribe(
      (res)=>{
        console.log("successfully update");
        localStorage.user = JSON.stringify(res.json().data);
      },
      (err)=>{
        console.log("failing update", err);
      }
    )
  }

  logout() {
    // console.log("logout service");
    localStorage.removeItem("user");
    console.log(localStorage.user);
    this.user = null;
  }
}
