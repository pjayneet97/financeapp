import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email;
  password;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  signIn(){
    console.log(this.email)
    this.auth.signIn(this.email,this.password)
  }

}
