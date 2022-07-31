import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  faLock = faLock;

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  usernameValue:string = '';

  constructor(private router: Router, private appservice: AppService) { }

  ngOnInit(): void {
  }

  transfer(){
    this.appservice.setValue(this.loginForm.value);
    this.appservice.setInfo(this.usernameValue);
    this.router.navigate(['/components'])
  }
}
