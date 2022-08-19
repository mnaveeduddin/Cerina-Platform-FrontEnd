import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  faUserPlus = faUserPlus;
  hide = true;
  username = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  reEnterpassword = new FormControl('',[Validators.required]);

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  createUserAccount(){
    let userData = {
      username: this.username.value,
      password: this.password.value,
      email: this.email.value
    }
    if(this.username.value && this.password.value && this.email.value && this.reEnterpassword.value){
      if(this.password.value === this.reEnterpassword.value){
        this.http.post('http://localhost:8080/createAccount', userData).subscribe((res) => {
          // console.log(res);
          window.alert("Account Created Successfully");
          this.router.navigate(['/login']);
        },(error) => {
          window.alert(error.error.message);
          // console.log(error);
        })
      }else{
        window.alert("Passwords does not match");
      }
    }
  }
}
