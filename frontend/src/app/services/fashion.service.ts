import { Injectable } from '@angular/core';
import { Fashion } from '../shared/models/Fashion';
import { manwoman_fashion, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FASHION_BY_ID_URL, FASHION_BY_SEARCH_URL, FASHION_BY_TAG_URL, FASHION_TAGS_URL, FASHION_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FashionService {

  constructor(private http:HttpClient ) { }

  getAll():Observable<Fashion[]>{
    return this.http.get<Fashion[]>(FASHION_URL);
  }

  getAllFashionBySearchTerm(searchTerm:string){
    //search articl
    return  this.http.get<Fashion[]>(FASHION_BY_SEARCH_URL +searchTerm);
  }

  getAllTags():Observable<Tag[]>{
   return  this.http.get<Tag[]>(FASHION_TAGS_URL);
 }

 getAllFashionByTag(tag:string):Observable<Fashion[]>{
   return tag ==="All" ?
   this.getAll():
   this.http.get<Fashion[]>(FASHION_BY_TAG_URL + tag) ;
 }

  getFashionById(fashionId:string):Observable<Fashion>{
    return  this.http.get<Fashion>(FASHION_BY_ID_URL + fashionId)
  }
 
 
}
