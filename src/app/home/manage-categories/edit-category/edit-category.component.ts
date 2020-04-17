import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  catId
  category
  constructor(public route:ActivatedRoute,public categoryService:CategoryService,public router:Router) { }

  ngOnInit(): void {
    this.catId=this.route.snapshot.paramMap.get("id")
    console.log(this.catId)
    this.getCategory()
  }

  getCategory(){
    this.categoryService.getCategoryByDocId(this.catId).subscribe(res=>{
      console.log(res)
      this.category=res
    })
  }

  save(){
    this.categoryService.updateCategory(this.catId,this.category).then(res=>{
      this.router.navigateByUrl("/home/manage-category")
    })
  }

}
