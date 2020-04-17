import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private db:AngularFirestore,public auth:AuthService) { 
    this.getAllCategories()
    //this.getAllValuesinDummy()
  }

  addCategory(categoryName:string){
    let category=new Category()
    category.name=categoryName
    //this.categories.push(category);
    let catObject=Object.assign({},category)
    this.db.collection("users").doc(this.auth.uid).collection("category").add(catObject).then(res=>{
      //alert("category added successfully")
    }).catch(err=>{
      alert("some error occoured")
    })
  }

  deleteCategory(id){
   // this.categories.splice(id,1);
   this.db.collection("users").doc(this.auth.uid).collection("category").doc(id).delete()
  }

/*   getAllCategories(){
   return this.db.collection("category").valueChanges()
  } */

  getAllCategories(){
    return this.db.collection("users").doc(this.auth.uid).collection("category").snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }

   updateCategory(id,updatedCategory){
    return this.db.collection("users").doc(this.auth.uid).collection("category").doc(id).update(Object.assign({},updatedCategory))
   }

   getCategoryByDocId(id){
    return this.db.collection("users").doc(this.auth.uid).collection("category").doc(id).valueChanges()
   }
}
