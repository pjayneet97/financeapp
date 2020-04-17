import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore/firestore';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor(public auth:AuthService,public db:AngularFirestore) { }

}
