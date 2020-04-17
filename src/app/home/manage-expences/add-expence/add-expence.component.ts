import { Component, OnInit } from '@angular/core';
import { Expence } from 'src/app/models/expence.model';
import { ExpenceService } from 'src/app/services/expence.service';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-expence',
  templateUrl: './add-expence.component.html',
  styleUrls: ['./add-expence.component.css']
})
export class AddExpenceComponent implements OnInit {
  expence=new Expence()
  categories=[]
  constructor(public expenceService:ExpenceService,public router:Router,public categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getUserCats()
  }

  addExpence(){
    this.expenceService.addExpence(this.expence).then(res=>{
      //alert("category added successfully")
      this.router.navigateByUrl("/home/manage-expence")
    }).catch(err=>{
      alert("some error occoured")
    })
  }

  getUserCats(){
    this.categoryService.getAllCategories().subscribe(res=>{
      this.categories=res
      console.log(res)
    })
  }

}
