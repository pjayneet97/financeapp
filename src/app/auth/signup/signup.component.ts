import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email;
  password;
  name;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  signUp(){
    console.log(this.email)
    this.auth.signup(this.email,this.password,this.name)
  }

}
