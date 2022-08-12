import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  faLock = faLock;

  // username = new FormControl('', [Validators.required]);
  // password = new FormControl('', [Validators.required]);

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

 

  usernameData:string = '';
  passwordData:string = '';

  constructor(private router: Router, private appservice: AppService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  transfer(){
    // this.appservice.setValue(this.loginForm.value);
     let loginData = {
    usernameData: this.usernameData,
    passwordData: this.passwordData
  }
    this.appservice.setInfo(this.usernameData);

    this.http.post('http://localhost:8080/login', loginData).subscribe((res) => {
      console.log(res);
    })
    this.router.navigate(['/components'])
  }
}
