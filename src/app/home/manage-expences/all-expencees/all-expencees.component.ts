import { Component, OnInit } from '@angular/core';
import { ExpenceService } from 'src/app/services/expence.service';

@Component({
  selector: 'app-all-expencees',
  templateUrl: './all-expencees.component.html',
  styleUrls: ['./all-expencees.component.css']
})
export class AllExpenceesComponent implements OnInit {
  expences=[]
  constructor(public expenceService:ExpenceService) { }

  ngOnInit(): void {
    this.expenceService.getAllExpences().subscribe(res=>{
      this.expences=res
    })
  }

  delete(id){
    this.expenceService.deleteExpence(id)
  }

}
