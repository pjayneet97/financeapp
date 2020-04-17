import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ExpenceService } from 'src/app/services/expence.service';

@Component({
  selector: 'app-expence-summary',
  templateUrl: './expence-summary.component.html',
  styleUrls: ['./expence-summary.component.css']
})
export class ExpenceSummaryComponent implements OnInit {
  category;
  categories=[]
  expences=[]
  total=0;
  constructor(public categoryService:CategoryService,public expenceService:ExpenceService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(res=>{
      this.categories=res
    })
  }

  changeCat(event){

    console.log(event)
    this.expenceService.getExpenceByCatId(event.target.value).subscribe(res=>{
      this.expences=res;
      this.total=0;
      this.expences.forEach(element=>{
        this.total=this.total+element.amount
      })
    })
  }

}
