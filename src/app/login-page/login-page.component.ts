import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AppService } from '../app.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  faLock = faLock;
  hide = true;
  hideRequiredMarker = true;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  credentials:any;

  constructor(private router: Router, private appservice: AppService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  login(){
    if(this.username.value && this.password.value){
      let httpParams = new HttpParams().set("username",this.username.value)
      this.http.get('http://localhost:8080/login', { params : httpParams}).subscribe((res) => {
        // console.log(res);
        this.credentials = res
        if(this.credentials.password === this.password.value){
          this.router.navigate(['/components'])
          this.appservice.setInfo(this.credentials.username);
        }else{
          window.alert("Incorrect Password")
        }
      },(error) => {
        window.alert("User Does Not Exist. Please Create Your Accont.");
        // console.log(error);
      }
      )
    }

  };
}
