import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FashionService } from 'src/app/services/fashion.service';
import { Fashion } from 'src/app/shared/models/Fashion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  fashions:Fashion[]=[];
  constructor(private fashionservice:FashionService,activatedRoute:ActivatedRoute){
   let fashionsObservable : Observable<Fashion[]>;
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
         fashionsObservable = this.fashionservice.getAllFashionBySearchTerm(params.searchTerm);
      else if(params.tag)
         fashionsObservable=this.fashionservice.getAllFashionByTag(params.tag);
      
      else
         fashionsObservable = fashionservice.getAll();
       
         fashionsObservable.subscribe((serverFashions)=>{
         this.fashions = serverFashions;
         })
    })
   
  }
  ngOnInit(): void {
    
  }
  

}
