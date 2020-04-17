import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Expence } from '../models/expence.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenceService {

  constructor(private db:AngularFirestore,public auth:AuthService) { 
  }

  addExpence(expence:Expence){
    let newExpence=Object.assign({},expence)
    return this.db.collection("users").doc(this.auth.uid).collection("expence").add(newExpence)
  }

  deleteExpence(id){
   this.db.collection("users").doc(this.auth.uid).collection("expence").doc(id).delete()
  }



  getAllExpences(){
    return this.db.collection("users").doc(this.auth.uid).collection("expence").snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }

   getExpenceByCatId(id){
    return this.db.collection("users").doc(this.auth.uid).collection("expence",ref=>ref.where("category","==",id).orderBy("category","asc")).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }

   getExpenceBetweenDate(startdate,enddate){
    return this.db.collection("users").doc(this.auth.uid).collection("expence",ref=>ref.where("timestamp",">=",startdate).where("timestamp","<=","ebdDate")).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }
}
