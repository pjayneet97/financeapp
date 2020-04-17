import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uid=null
  constructor(public router:Router,public auth:AngularFireAuth,public db:AngularFirestore) {
    if(localStorage.getItem("uid")){
      this.uid=localStorage.getItem("uid")
    }
    this.auth.authState.subscribe(res=>{
      console.log(res)
      this.uid=res.uid
      //this.router.navigateByUrl("/home")
    })
   }

  signIn(email,password){
    this.auth.signInWithEmailAndPassword(email,password).then(res=>{
      console.log(res.user.uid)
      if(res.user.uid){
        this.uid=res.user.uid;
        localStorage.setItem("uid",this.uid)
        this.router.navigateByUrl("/home")
      }
    }).catch(err=>{
      console.log(err)
    })
  }

  logout(){
    this.auth.signOut().then(res=>{
      this.uid=null
      localStorage.removeItem("uid")
      this.router.navigateByUrl("/auth")
    })
  }

  isAuthenticated(){
    if(this.uid){
      return true
    }
    else{
      return false
    }
  }

  signup(email,password,name){
    this.auth.createUserWithEmailAndPassword(email,password).then(res=>{
      this.db.collection("users").doc(res.user.uid).set({name:name})
    }).catch(err=>{
      console.log(err)
    })
  }

}
