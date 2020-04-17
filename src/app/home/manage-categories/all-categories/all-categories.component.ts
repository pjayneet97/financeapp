import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {
  categories=[]
  constructor(public categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(res=>{
      this.categories=res
      console.log(res)
    })
  }

  deleteCategory(id){
    console.log("in delete")
    this.categoryService.deleteCategory(id)
  }

}
