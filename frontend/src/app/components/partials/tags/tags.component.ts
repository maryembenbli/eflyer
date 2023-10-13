import { Component, OnInit } from '@angular/core';
import { FashionService } from 'src/app/services/fashion.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{
  tags?:Tag[];
  constructor(fashionservice:FashionService){
    fashionservice.getAllTags().subscribe(serverTags =>{
     this.tags = serverTags;
    });
  }
   ngOnInit(): void {
      //throw new Error('Method not implemented.');
   }

}
