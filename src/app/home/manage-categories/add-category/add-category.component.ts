import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryName
  constructor(public categoryService:CategoryService,public router:Router) { }

  ngOnInit(): void {
  }

  addCategory(){
    this.categoryService.addCategory(this.categoryName)
    console.log("fbub")
    this.router.navigateByUrl("/home/manage-category")
  }

}
